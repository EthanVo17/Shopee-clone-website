import mongoose from 'mongoose';

import { OrderType } from '../types';

const OrderSchema = new mongoose.Schema<OrderType>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },

    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'products',
          required: true,
        },
        sku: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],

    totalPrice: {
      type: Number,
      required: true,
    },

    finalPrice: {
      type: Number,
      required: true,
    },

    discountAmount: {
      type: Number,
      required: true,
      default: 0,
    },

    voucherCode: {
      type: String,
      default: null,
    },

    shippingAddress: {
      type: String,
      required: true,
    },

    paymentMethod: {
      type: String,
      enum: ['COD', 'ONLINE'],
      default: 'COD',
    },

    status: {
      type: String,
      enum: ['PENDING', 'PROCESSING', 'SHIPPED', 'DELIVERED', 'CANCELLED'],
      default: 'PENDING',
    },
  },
  { timestamps: true }
);

const OrderModel = mongoose.model<OrderType>('orders', OrderSchema);

export default OrderModel;
