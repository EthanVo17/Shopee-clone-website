import mongoose from 'mongoose';

import { VoucherType } from '../types';

const VoucherSchema = new mongoose.Schema<VoucherType>(
  {
    code: {
      type: String,
      unique: true,
      required: [true, 'Voucher code is required'],
      uppercase: true,
      trim: true,
    },

    type: {
      type: String,
      enum: ['percentage', 'fixed_amount'],
      required: [true, 'Discount type is required'],
    },

    value: {
      type: Number,
      required: [true, 'Discount value is required'],
      min: [0, 'Discount value must be positive'],
    },

    minOrderValue: {
      type: Number,
      default: 0,
      min: [0, 'Minimum order value must be positive'],
    },

    maxDiscountValue: {
      type: Number,
      default: 0,
      min: [0, 'Max discount value must be positive'],
    },

    usageLimit: {
      type: Number,
      default: 0,
      min: [0, 'Usage limit must be positive'],
    },

    timesUsed: {
      type: Number,
      default: 0,
    },

    startDate: {
      type: Date,
      required: [true, 'Start date is required'],
    },

    endDate: {
      type: Date,
      required: [true, 'End date is required'],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const VoucherModel = mongoose.model<VoucherType>('Voucher', VoucherSchema);

export default VoucherModel;
