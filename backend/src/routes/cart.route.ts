import express from 'express';

import {
  getCart,
  addItem,
  updateItem,
  deleteItem,
  applyVoucher,
} from '../controllers/cart.controlller';
import { protectAuth } from '../middlewares';

const router: express.Router = express.Router();

// Tất cả cart routes đều yêu cầu authentication
router.use(protectAuth as express.RequestHandler);

router.get('/', getCart as express.RequestHandler);
router.post('/items', addItem as express.RequestHandler);
router.patch('/items/:itemId', updateItem as express.RequestHandler);
router.delete('/items/:itemId', deleteItem as express.RequestHandler);
router.post('/voucher', applyVoucher as express.RequestHandler);

export default router;
