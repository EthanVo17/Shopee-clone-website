import express from 'express';

export type AppControllerType = (
  req: express.Request,
  res: express.Response
) => void | Promise<void>;
