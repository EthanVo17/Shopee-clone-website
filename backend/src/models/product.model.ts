import mongoose from 'mongoose';

import { ProductType } from '../types';

const ProductModel = new mongoose.Schema<ProductType>({
  name: {
    type: String,
    require: [true, 'Please enter a name for the product.'],
    trim: true,
    MaxLength: [120, 'Name do not longer than 120 keywords'],
  },

  description: {
    type: String,
    require: [true, 'Please enter a name for the description'],
  },

  price: {
    type: Number,
    require: [true, 'Please enter a price for the product'],
    min: [0, 'The price do not less than zero'],
  },

  discountPrice: {
    type: Number,
    validate: {
      validator: (price: number, prevPrice: number) => {
        return price < prevPrice;
      },

      message: 'The discounted price must be less than the original price.',
    },
  },

  countInStock: {
    type: Number,
    require: [true, 'Please enter a stock in the storage for the product'],
    min: [0, 'The stock do not less than zero'],
    default: 0,
  },

  images: [
    {
      type: String,
      required: [true, 'Vui lòng cung cấp ít nhất một hình ảnh'],
    },
  ],

  category: {
    type: mongoose.Schema.Types.ObjectId as mongoose.SchemaTypeOptions<any>,
    ref: 'category',
    required: [true, 'Please choose the category for this product'],
  },

  brand: {
    type: mongoose.Schema.Types.ObjectId as mongoose.SchemaTypeOptions<any>,
    ref: 'brand',
    required: [true, 'Please choose the brand for this product'],
  },

  slug: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
  },

  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },

  numReviews: {
    type: Number,
    default: 0,
  },
});

export default ProductModel;
