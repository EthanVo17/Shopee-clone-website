import mongoose from 'mongoose';

import { CartItemsType, CartType } from '../types';

const CartItemsChema = new mongoose.Schema<CartItemsType>({
  productID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },

  sku: {
    type: String,
    required: true,
  },

  quantity: {
    type: Number,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
});

const CartChema = new mongoose.Schema<CartType>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },

    items: [CartItemsChema],

    totalPrice: {
      type: Number,
      default: 0,
    },

    discountAmount: { type: Number, default: 0 },

    finalPrice: { type: Number, default: 0 },

    voucherCode: { type: String, default: null },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const CartModel = mongoose.model<CartType>('Cart', CartChema);

export default CartModel;
