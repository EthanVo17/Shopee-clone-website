import { CartModel } from '../../models';

const getCart = async (userId: string) => {
  let cart = await CartModel.findOne({ user: userId }).populate(
    'items.productID',
    'name slug images'
  );

  if (!cart) {
    cart = await CartModel.create({ user: userId, items: [] });
  }

  return cart;
};

export { getCart };
