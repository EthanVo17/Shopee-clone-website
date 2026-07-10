import express from 'express';

import { Register, Login } from '../controllers';

const router: express.Router = express.Router();

router.post('/login', Login);
router.post('/register', Register);

export default router;
