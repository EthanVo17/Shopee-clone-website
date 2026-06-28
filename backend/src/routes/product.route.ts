import express from 'express';

import { CreateProduct } from '../controllers';

const router = express.Router();

//public

//private
router.post('/create', CreateProduct);

export default router;
