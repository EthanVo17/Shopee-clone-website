import express from 'express';

import serverRoute from './serverRoute';
import productRoute from './product.route';
import userRoute from './user.route';
import cartRoute from './cart.route';

function route(app: express.Application) {
  app.use('/', serverRoute);

  app.use('/api/products', productRoute);

  app.use('/api/user', userRoute);

  app.use('/api/cart', cartRoute);
}

export default route;
