import mongoose from 'mongoose';

import { UserModel } from '../models';
import { AppControllerType, UserType } from '../types';
import { generateAccessToken, generateRefreshToken } from '../jwt';
import bcrypt from 'bcryptjs';

const Register: AppControllerType = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      res.status(400).json('Please enter the field');
      throw new Error('Please enter the field');
    }

    const userExist = await UserModel.findOne({ email });

    if (userExist) {
      res.status(400).json('This email has been used! PLease use another email');
      return;
    }

    const newUser = await UserModel.create({
      name,
      email,
      password,
      role,
    });

    const AccessToken = generateAccessToken(newUser);
    const RefreshToken = generateRefreshToken(newUser);

    const { password: _, ...userInfo } = newUser.toObject();

    res.status(201).json({
      message: 'Register successfully',
      user: userInfo,
      AccessToken,
      RefreshToken,
    });
  } catch (error) {
    next(error);
  }
};

const Login: AppControllerType = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    const isMatchedPassword = user ? await bcrypt.compare(password, user.password) : false;

    if (!user || !isMatchedPassword) {
      res.status(400).json('Invalid email or password');
      return;
    }

    generateAccessToken(user);
    generateRefreshToken(user);

    const { password: _, ...userInfo } = user.toObject();

    res.status(201).json({ message: `Welcome back ${userInfo.name}`, userInfo });
  } catch (error) {
    res.status(400).json('Fail to login');
    next();
  }
};

export { Register, Login };
