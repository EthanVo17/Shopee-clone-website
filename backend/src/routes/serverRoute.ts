import express from 'express';

import { homeController } from '../controllers';

const router = express.Router();

router.post('/', homeController);

export default router;
