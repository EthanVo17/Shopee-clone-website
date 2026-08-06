import mongoose from 'mongoose';

import { OrderModel, CartModel, Product, VoucherUsageModel } from '../../models';
import { createOrderType } from '../../types';

const createOrder = async (input: createOrderType) => {
  const { userId, shippingAddress, paymentMethod } = input;

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    // 1. Lấy giỏ hàng theo field "user" (không phải "userId")
    const cart = await CartModel.findOne({ user: userId }).session(session);

    if (!cart || cart.items.length === 0) {
      throw new Error('Cart is empty');
    }

    // 2. Kiểm tra và trừ stock từng sản phẩm
    for (const item of cart.items) {
      const result = await Product.updateOne(
        {
          _id: item.productID,
          'variant.sku': item.sku,
          'variant.stock': { $gte: item.quantity }, // Đảm bảo còn đủ hàng
        },
        {
          $inc: { 'variant.stock': -item.quantity },
        },
        { session }
      );

      if (result.modifiedCount === 0) {
        throw new Error(`Product with SKU "${item.sku}" is out of stock or unavailable`);
      }
    }

    // 3. Tạo order
    const [NewOrder] = await OrderModel.create(
      [
        {
          user: userId,
          items: cart.items,
          totalPrice: cart.totalPrice,
          discountAmount: cart.discountAmount,
          finalPrice: cart.finalPrice,
          voucherCode: cart.voucherCode,
          shippingAddress,
          paymentMethod,
          status: 'PENDING',
        },
      ],
      { session }
    );

    // 4. Nếu có dùng voucher → cập nhật VoucherUsage với orderId
    if (cart.voucherCode) {
      await VoucherUsageModel.updateOne(
        {
          userId,
          orderId: null,
          discountAmount: cart.discountAmount,
        },
        { $set: { orderId: NewOrder._id } }, // Fix: dùng NewOrder._id thay vì biến chưa khai báo
        { session }
      );
    }

    // 5. Xoá giỏ hàng sau khi đặt hàng thành công
    await CartModel.findOneAndDelete({ user: userId }, { session });

    // 6. Commit transaction
    await session.commitTransaction();

    return NewOrder;
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }
};

export const OrderService = {
  createOrder,
};
