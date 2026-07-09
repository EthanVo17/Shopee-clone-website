import mongoose from 'mongoose';

const reCalculateCart = async (cart: mongoose.Document & Record<string, any>) => {
  const totalPrice = cart.items.reduce(
    (sum: number, item: { price: number; quantity: number }) => sum + item.price * item.quantity,
    0
  );

  cart.totalPrice = totalPrice;
  cart.finalPrice = totalPrice - cart.discountAmount;

  if (cart.finalPrice < 0) cart.finalPrice = 0;

  await cart.save();
};

export { reCalculateCart };
