import mongoose from 'mongoose';

import { CategoryType } from '../types';

const CategorySchema = new mongoose.Schema<CategoryType>(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },

    slug: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      index: true,
    },

    parent_Id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      default: null,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const CategoryModel = mongoose.model('Category', CategorySchema);

export default CategoryModel;
