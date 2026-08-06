import { AuthController } from '../types';
import { OrderService } from '../services';

// ──────────────────────────────────────────
// POST /api/orders/checkout — Đặt hàng
// ──────────────────────────────────────────

const checkoutOrder: AuthController = async (req, res, next) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }

    const { shippingAddress, paymentMethod } = req.body;

    if (!shippingAddress) {
      res.status(400).json({ message: 'Please provide the delivery address.' });
      return; // Fix: thêm return để không tiếp tục chạy xuống
    }

    if (paymentMethod && !['COD', 'ONLINE'].includes(paymentMethod)) {
      res.status(400).json({ message: 'Invalid payment method. Must be "COD" or "ONLINE".' });
      return;
    }

    const order = await OrderService.createOrder({
      userId,
      shippingAddress,
      paymentMethod: paymentMethod ?? 'COD',
    });

    res.status(201).json({ message: 'Order placed successfully', data: order });
  } catch (error) {
    next(error); // Chuyển lỗi cho global error handler
  }
};

export { checkoutOrder };
