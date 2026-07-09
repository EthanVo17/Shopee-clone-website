import mongoose from 'mongoose';

import { Product, CartModel } from '../../models';
import { reCalculateCart } from './reCalculateCart';

const addToCart = async (userId: string, productId: string, sku: string, quantity: number) => {
  const product = await Product.findById(productId);
  if (!product) {
    throw new Error('Product not found');
  }

  const variant = product.variant?.find((v: any) => v.sku === sku);
  if (!variant) {
    throw new Error('Variant not found for the given SKU');
  }

  if (variant.stock < quantity) {
    throw new Error(`Insufficient stock. Available: ${variant.stock}`);
  }

  let cart = await CartModel.findOne({ userId });
  if (!cart) {
    cart = await CartModel.create({ user: userId, items: [] });
  }

  const existingItem = cart.items.find((item: any) => {
    item.productID.toString() === productId && item.sku === sku;
  });

  if (existingItem) {
    const newQuantity = existingItem.quantity + quantity;
    if (existingItem.quantity > variant.stock) {
      throw new Error(
        `Insufficient stock. Available: ${variant.stock}, in cart: ${existingItem.quantity}`
      );
    }

    return (existingItem.quantity = newQuantity);
  } else {
    cart.items.push({
      productID: new mongoose.Types.ObjectId(productId),
      sku,
      quantity,
      price: variant.price,
    });
  }

  cart.discountAmount = 0;
  cart.voucherCode = null;

  await reCalculateCart(cart);
  return cart;
};

export { addToCart };
