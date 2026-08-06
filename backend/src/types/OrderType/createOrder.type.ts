interface createOrderType {
  userId: string;
  shippingAddress: string;
  paymentMethod: 'COD' | 'ONLINE';
}

export type { createOrderType };
