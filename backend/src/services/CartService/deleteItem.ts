import { CartModel } from '../../models';
import { reCalculateCart } from './reCalculateCart';

const deleteItem = async (itemId: string, userId: string) => {
  const cart = await CartModel.findOne({ user: userId });

  if (!cart) {
    throw new Error('Cart not found');
  }

  const existingItem = cart.items.some((i: any) => {
    return i._id.toString() === itemId;
  });

  if (!existingItem) {
    throw new Error('Item not found in cart');
  }

  cart.items = cart.items.filter((i: any) => {
    return i._id.toString() !== itemId;
  });

  cart.discountAmount = 0;
  cart.voucherCode = null;

  await reCalculateCart(cart);

  return cart;
};

export { deleteItem };
