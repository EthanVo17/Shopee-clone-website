import express from 'express';

import { CreateProduct, getProduct } from '../controllers';

const router: express.Router = express.Router();

//public
router.get('/', getProduct);

//private
router.post('/create', CreateProduct);

export default router;
