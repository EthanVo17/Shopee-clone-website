import { JwtPayload } from 'jsonwebtoken';
import mongoose from 'mongoose';

interface UserType {
  _id: mongoose.Types.ObjectId | string;
  name: string;
  email: string;
  password: string;
  phone: number;
  avatar: string[];
  addresses: string[];
  role: string;
  cart: string[];
  loginAttempts: number;
  locked?: Date;
  tokens?: string[];
}

interface UserPayload extends JwtPayload {
  email: string;
  role: string;
}

export { UserType, UserPayload };
