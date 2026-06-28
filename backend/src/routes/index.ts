import express from 'express';

import serverRoute from './serverRoute';
import productRoute from './product.route';
import userRoute from './user.route';

function route(app: express.Application) {
  app.use('/', serverRoute);

  app.use('/api/product', productRoute);

  app.use('/api', userRoute);
}

export default route;
