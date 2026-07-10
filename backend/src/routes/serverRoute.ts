import express from 'express';

import { homeController } from '../controllers';

const router: express.Router = express.Router();

router.get('/', homeController);

export default router;
