import mongoose from 'mongoose';

import { Variant } from './Variant.type';

interface ProductType {
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  countInStock: number;
  images: string[];
  category: mongoose.Schema.Types.ObjectId;
  brand: mongoose.Schema.Types.ObjectId;
  variant: mongoose.Types.DocumentArray<Variant>;
  slug: string;
  rating?: number;
  numReviews?: number;
}

interface ProductFilterQuery {
  page?: string;
  limit?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  sort?: string;
  keyword?: string;
}

export type { ProductType, ProductFilterQuery };
