import express from 'express';

interface AuthenticatedRequest extends express.Request {
  user?: {
    id: string;
    email: string;
    role: string;
  };
}

export type AuthController = (
  req: AuthenticatedRequest,
  res: express.Response,
  next: express.NextFunction
) => void | Promise<void>;
