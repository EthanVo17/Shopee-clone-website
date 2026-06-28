import express from 'express';

export type AppMiddlewareType = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => void | Promise<void>;
