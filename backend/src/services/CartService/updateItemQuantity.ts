import mongoose from 'mongoose';

import { CartModel, Product } from '../../models';
import { reCalculateCart } from './reCalculateCart';

const updateItemQuantity = async (userId: string, quantity: number, itemId: string) => {
  const cart = await CartModel.findOne({ user: userId });

  if (!cart) {
    throw new Error('Cart not found');
  }

  const item = cart.items.find((i: any) => {
    return i._id.toString() === itemId;
  });

  if (!item) {
    throw new Error('Product not found');
  }

  if (quantity <= 0) {
    cart.items.filter((i: any) => {
      return i._id.toString() !== itemId;
    });
  } else {
    const product = await Product.findById(item.productID);

    const variant = product?.variant?.find((i: any) => i.sku === item.sku);

    if (variant && quantity > variant.stock) {
      throw new Error(`Insufficient stock. Available: ${variant.stock}`);
    }

    item.quantity = quantity;
  }

  cart.discountAmount = 0;
  cart.voucherCode = null;
};

export { updateItemQuantity };
