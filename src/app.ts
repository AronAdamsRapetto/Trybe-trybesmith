import express from 'express';
import 'express-async-errors';
import productRouter from './routers/products.router';
import userRouter from './routers/user.router';
import orderRouter from './routers/order.router';
import errorMiddleware from './middlewares/error.middleware';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use(userRouter);
app.use('/orders', orderRouter);

app.use(errorMiddleware);

export default app;
