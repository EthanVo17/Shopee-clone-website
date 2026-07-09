import mongoose from 'mongoose';

interface VoucherType {
  code: string;
  type: 'percentage' | 'fixed_amount';
  value: number;
  minOrderValue: number;
  maxDiscountValue: number;
  usageLimit: number;
  timesUsed: number;
  startDate: Date;
  endDate: Date;
}

interface VoucherUsageType {
  userId: mongoose.Types.ObjectId;
  voucherId: mongoose.Types.ObjectId;
  orderId: mongoose.Types.ObjectId | null;
  discountAmount: number;
}

export type { VoucherType, VoucherUsageType };
