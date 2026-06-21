import express from 'express';

import { AppControllerType } from './AppControllerType';

export type AppMiddlewareType = (
  req: AppControllerType,
  res: express.Response
) => void | Promise<void>;
