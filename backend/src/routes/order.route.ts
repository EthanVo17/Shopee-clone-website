import express from 'express';

import { checkoutOrder } from '../controllers/order.controller';
import { protectAuth } from '../middlewares';

const router: express.Router = express.Router();

// Tất cả order routes đều yêu cầu authentication
router.use(protectAuth as express.RequestHandler);

// POST /api/orders/checkout — Đặt hàng từ giỏ hàng
router.post('/checkout', checkoutOrder as express.RequestHandler);

export default router;
