import express from 'express';

import serverRoute from './serverRoute';

function route(app: express.Application) {
  app.use('/', serverRoute);
}

export default route;
