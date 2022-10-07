import { Router } from 'express';
import OrderController from '../controllers/order.controller';
import authMiddleware from '../middlewares/auth.middleware';

const orderRouter = Router();

const orderController = new OrderController();

orderRouter.get('/', orderController.getAll);
orderRouter.post('/', authMiddleware, orderController.createOrder);

export default orderRouter;