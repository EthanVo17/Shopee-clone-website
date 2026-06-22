import mongoose from 'mongoose';

interface ProductType {
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  countInStock: number;
  images: string[];
  category: mongoose.Schema.Types.ObjectId;
  brand: mongoose.Schema.Types.ObjectId;
  slug: string;
  rating?: number;
  numReviews?: number;
}

export default ProductType;
