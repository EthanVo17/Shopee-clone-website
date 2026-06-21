import express from 'express';
import serverController from '../controllers/serverController';

const router = express.Router();

router.post('/', serverController);

export default router;
