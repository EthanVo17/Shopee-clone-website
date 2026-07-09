import { reCalculateCart } from './reCalculateCart';
import { getCart } from './getCart';
import { deleteItem } from './deleteItem';
import { applyVoucher } from './applyVoucher';
import { addToCart } from './addToCart';
import { updateItemQuantity } from './updateItemQuantity';

const CartService = {
  reCalculateCart,
  getCart,
  deleteItem,
  applyVoucher,
  addToCart,
  updateItemQuantity,
};

export default CartService;
