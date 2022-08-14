import express from 'express';
const app = express();

import dotevn from 'dotenv';
dotevn.config();

import 'express-async-errors';

import morgan from 'morgan';

// database
import { connectDB } from './db/connectDB.js';

// middleware
import {
  errorHandleMiddleware,
  notFoundMiddleware,
} from './middleware/index.js';

// Routes
import authRouter from './routes/authRoutes.js';
import jobRouter from './routes/jobRoutes.js';

app.use(express.json());
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', jobRouter);

app.use(notFoundMiddleware);
app.use(errorHandleMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Sever is listening on port: ${port}`);
    });
  } catch (error) {
    console.log(`Something went wrong! ${error}`);
  }
};

start();
