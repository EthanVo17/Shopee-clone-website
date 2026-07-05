import mongoose from 'mongoose';

import { Variant } from '../types';

const variantSchema = new mongoose.Schema<Variant>({
  sku: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },

  price: {
    type: Number,
    required: true,
    min: [0, 'The price should not less than zero'],
  },

  stock: {
    type: Number,
    required: true,
    min: [0, 'The stock should not less than zero'],
    default: 0,
  },

  attributes: [
    {
      key: { type: String, required: true },
      value: { type: String, required: true },
      _id: false,
    },
  ],
});

export { variantSchema };
