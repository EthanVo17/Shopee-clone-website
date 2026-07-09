import express from 'express';

import { CreateProduct, getProduct } from '../controllers';

const router: express.Router = express.Router();

//public

//private
router.post('/create', CreateProduct);
router.get('/', getProduct);

export default router;
