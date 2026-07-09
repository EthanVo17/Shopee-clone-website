import { AuthController } from '../types';
import { CartService } from '../services';

// ──────────────────────────────────────────
// GET /api/cart — Xem giỏ hàng
// ──────────────────────────────────────────

const getCart: AuthController = async (req, res, next) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }

    const cart = await CartService.getCart(userId);

    res.status(200).json({
      message: 'Get cart successfully',
      data: cart,
    });
  } catch (error: any) {
    next(error);
  }
};

// ──────────────────────────────────────────
// POST /api/cart/items — Thêm sản phẩm vào giỏ
// ──────────────────────────────────────────

const addItem: AuthController = async (req, res, next) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }

    const { productId, sku, quantity } = req.body;

    if (!productId || !sku || !quantity) {
      res.status(400).json({ message: 'productId, sku, and quantity are required' });
      return;
    }

    if (quantity <= 0) {
      res.status(400).json({ message: 'Quantity must be greater than 0' });
      return;
    }

    const cart = await CartService.addToCart(userId, productId, sku, quantity);

    res.status(200).json({
      message: 'Item added to cart successfully',
      data: cart,
    });
  } catch (error: any) {
    next(error);
  }
};

// ──────────────────────────────────────────
// PATCH /api/cart/items/:itemId — Cập nhật số lượng
// ──────────────────────────────────────────

const updateItem: AuthController = async (req, res, next) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }

    const { itemId } = req.params;
    const { quantity } = req.body;
    const normalizedItemId = Array.isArray(itemId) ? itemId[0] : itemId;

    if (quantity === undefined || quantity === null) {
      res.status(400).json({ message: 'Quantity is required' });
      return;
    }

    const cart = await CartService.updateItemQuantity(userId, quantity, normalizedItemId);

    res.status(200).json({
      message: 'Cart updated successfully',
      data: cart,
    });
  } catch (error: any) {
    next(error);
  }
};

// ──────────────────────────────────────────
// DELETE /api/cart/items/:itemId — Xóa sản phẩm khỏi giỏ
// ──────────────────────────────────────────

const deleteItem: AuthController = async (req, res, next) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }

    const { itemId } = req.params;

    const normalizedItemId = Array.isArray(itemId) ? itemId[0] : itemId;

    const cart = await CartService.deleteItem(userId, normalizedItemId);

    res.status(200).json({
      message: 'Item removed from cart successfully',
      data: cart,
    });
  } catch (error: any) {
    next(error);
  }
};

// ──────────────────────────────────────────
// POST /api/cart/voucher — Áp dụng mã giảm giá
// ──────────────────────────────────────────

const applyVoucher: AuthController = async (req, res, next) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }

    const { voucherCode } = req.body;

    if (!voucherCode) {
      res.status(400).json({ message: 'Voucher code is required' });
      return;
    }

    const cart = await CartService.applyVoucher(userId, voucherCode);

    res.status(200).json({
      message: `Voucher "${voucherCode.toUpperCase()}" applied successfully`,
      data: cart,
    });
  } catch (error: any) {
    next(error);
  }
};

export { getCart, addItem, updateItem, deleteItem, applyVoucher };
