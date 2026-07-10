import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import routes from './routes/index';
import { connectDB } from './config';

connectDB();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(morgan('combined'));
app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    credentials: true,
  })
);

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        connectSrc: ["'self'", `http://localhost:${PORT}`, `http://localhost:${PORT}`],
      },
    },
  })
);

routes(app);

app.listen(PORT, () => {
  console.log(`[server]: Backend đang chạy tại http://localhost:${PORT}`);
});
