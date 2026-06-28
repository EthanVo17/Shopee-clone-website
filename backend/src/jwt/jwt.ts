import jwt from 'jsonwebtoken';

import { UserType } from '../types';

const getUserIdentifier = (user: UserType) => {
  if (!user._id) {
    throw new Error('User id is missing');
  }

  return user._id.toString();
};

const getSecrets = () => {
  const SecretSecretkey = process.env.JWT_SECRET;
  const RefreshSecretKey = process.env.JWT_REFRESH_SECRET;
  const AccessExpire = (process.env.JWT_ACCESSTOKEN_EXPIRE_IN ||
    '15m') as jwt.SignOptions['expiresIn'];
  const RefreshExpire = (process.env.JWT_REFRESHTOKEN_EXPIRE_IN ||
    '7d') as jwt.SignOptions['expiresIn'];

  if (!SecretSecretkey) {
    throw new Error('JWT_SECRET environment variable is missing!');
  }

  if (!RefreshSecretKey) {
    throw new Error('JWT_REFRESH_SECRET environment variable is missing!');
  }

  return { SecretSecretkey, RefreshSecretKey, AccessExpire, RefreshExpire };
};

const generateAccessToken = (user: UserType) => {
  const payload = { _id: getUserIdentifier(user) };

  const { SecretSecretkey, AccessExpire } = getSecrets();
  const AccessToken = jwt.sign(payload, SecretSecretkey, {
    expiresIn: AccessExpire,
  });

  return AccessToken;
};

const generateRefreshToken = (user: UserType) => {
  const payload = { _id: getUserIdentifier(user) };

  const { RefreshSecretKey, RefreshExpire } = getSecrets();

  const RefreshToken = jwt.sign(payload, RefreshSecretKey, {
    expiresIn: RefreshExpire,
  });

  return RefreshToken;
};

const verifyAccessToken = (token: string) => {
  const { SecretSecretkey } = getSecrets();
  return jwt.verify(token, SecretSecretkey);
};

const verifyRefreshToken = (token: string) => {
  const { RefreshSecretKey } = getSecrets();
  return jwt.verify(token, RefreshSecretKey);
};

export { generateAccessToken, generateRefreshToken, verifyAccessToken, verifyRefreshToken };
