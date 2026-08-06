import mongoose from 'mongoose';

// Snapshot của từng sản phẩm tại thời điểm đặt hàng
interface OrderItemType {
  productId: mongoose.Types.ObjectId;
  sku: string;
  price: number;
  quantity: number;
}

interface OrderType {
  user: mongoose.Types.ObjectId;
  items: OrderItemType[];
  totalPrice: number;
  finalPrice: number;
  discountAmount: number;
  voucherCode?: string | null;
  shippingAddress: string;
  paymentMethod: 'COD' | 'ONLINE';
  status: 'PENDING' | 'PROCESSING' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';
}

export type { OrderType, OrderItemType };
