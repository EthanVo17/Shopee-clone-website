import mongoose from 'mongoose';

import { CartModel, VoucherModel, VoucherUsageModel } from '../../models';
import { reCalculateCart } from './reCalculateCart';

const applyVoucher = async (userId: string, voucherCode: string) => {
  const cart = await CartModel.findOne({ user: userId });

  if (!cart) {
    throw new Error('cart not found');
  }

  if (cart.items.length === 0) {
    throw new Error('Cart is empty');
  }

  const voucher = await VoucherModel.findOne({ code: voucherCode.toUpperCase() });

  if (!voucher) {
    throw new Error('Voucher not found');
  }

  const now = new Date();

  if (now < voucher.startDate) {
    throw new Error('Voucher has not started yet');
  }

  if (now > voucher.endDate) {
    throw new Error('Voucher has expired');
  }

  if (voucher.usageLimit > 0 && voucher.timesUsed > voucher.usageLimit) {
    throw new Error('Voucher usage limit reached');
  }

  if (cart.totalPrice < voucher.minOrderValue) {
    throw new Error(`Order total must be at least ${voucher.minOrderValue} to use this voucher`);
  }

  const VoucherAlreadyUsed = await VoucherUsageModel.findOne({
    user: userId,
    voucherId: voucher._id,
  });

  if (VoucherAlreadyUsed) {
    throw new Error('You have already used this voucher');
  }

  let discountAmount = 0;

  if (voucher.type === 'percentage') {
    discountAmount = (cart.totalPrice * voucher.value) / 100;

    if (voucher.maxDiscountValue > 0 && discountAmount > voucher.maxDiscountValue) {
      discountAmount = voucher.maxDiscountValue;
    }
  } else {
    discountAmount = voucher.value;
  }

  if (discountAmount > cart.totalPrice) {
    discountAmount = cart.totalPrice;
  }

  cart.discountAmount = discountAmount;
  cart.voucherCode = voucher.code;
  cart.finalPrice = cart.totalPrice - discountAmount;

  await cart.save();

  await VoucherUsageModel.create({
    userId,
    voucherId: voucher._id,
    orderId: null,
    discountAmount,
  });

  voucher.timesUsed += 1;

  await voucher.save();

  return cart;
};

export { applyVoucher };
