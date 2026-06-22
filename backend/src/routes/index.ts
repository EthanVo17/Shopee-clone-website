import express from 'express';

import serverRoute from './serverRoute';
import productRoute from './product.route';

function route(app: express.Application) {
  app.use('/', serverRoute);

  app.use('/api/product', productRoute);
}

export default route;
