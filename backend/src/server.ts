import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import routes from './routes/index';
import { connectDB } from './config';

connectDB();

const PORT = process.env.PORT || 3000;


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(morgan('dev'));

routes(app);

app.listen(PORT, () => {
  console.log(`[server]: Backend đang chạy tại http://localhost:${PORT}`);
});
