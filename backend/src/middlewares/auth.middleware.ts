import { AppControllerType, UserPayload } from '../types';
import { verifyAccessToken } from '../jwt';

const protectAuth: AppControllerType = async (req, res, next) => {
  try {
    let token: string | undefined;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      res.status(401).json({ message: 'Unauthorized, no token provided' });
      return;
    }

    const decoded = verifyAccessToken(token) as UserPayload;

    // Gắn user info vào request để controller phía sau sử dụng
    (req as any).user = {
      id: decoded._id,
      email: decoded.email,
      role: decoded.role,
    };

    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized, invalid token' });
  }
};

export { protectAuth };
