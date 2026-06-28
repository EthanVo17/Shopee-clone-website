import mongoose from 'mongoose';

import { UserModel } from '../models';
import { AppControllerType, UserType } from '../types';
import {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
} from '../jwt';

const protectAuth: AppControllerType = async (req, res, next) => {
  try {
    let token: string | undefined;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization?.split(' ')[1];
    }

    if (!token) {
      throw new Error('no authorize, no token');
    }

    const decoded = verifyAccessToken(token);
    (req as any).user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: 'error authorize' });
  }
};

export { protectAuth };
