import mongoose from 'mongoose';

import { VoucherUsageType } from '../types';

const VoucherUsageSchema = new mongoose.Schema<VoucherUsageType>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },

    voucherId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'voucher',
      required: true,
    },

    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'orders',
      default: null,
    },

    discountAmount: {
      type: Number,
      required: true,
      min: [0, 'Discount amount must be positive'],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Mỗi user chỉ dùng 1 voucher 1 lần
VoucherUsageSchema.index({ userId: 1, voucherId: 1 }, { unique: true });

const VoucherUsageModel = mongoose.model<VoucherUsageType>('voucherusages', VoucherUsageSchema);

export default VoucherUsageModel;
