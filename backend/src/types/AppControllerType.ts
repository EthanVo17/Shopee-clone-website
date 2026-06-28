import express from 'express';

export type AppControllerType = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => void | Promise<void>;
