import mongoose from 'mongoose';

interface CartItemsType {
  productID: mongoose.Types.ObjectId;
  sku: string;
  quantity: number;
  price: number;
}

interface CartType {
  user: mongoose.Types.ObjectId;
  items: CartItemsType[];
  totalPrice: number;
  discountAmount: number;
  finalPrice: number;
  voucherCode: string | null;
}

export type { CartType, CartItemsType };
