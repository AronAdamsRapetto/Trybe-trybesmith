import express from 'express';
import productRouter from './routers/products.router';
import userRouter from './routers/user.router';
import errorMiddleware from './middlewares/error.middleware';

require('express-async-errors');

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);

app.use(errorMiddleware);

export default app;
