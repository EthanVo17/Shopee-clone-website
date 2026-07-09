import express from 'express';

import { Register, Login } from '../controllers';

const router: express.Router = express.Router();

router.post('/user', Login);
router.post('/register', Register);

export default router;
