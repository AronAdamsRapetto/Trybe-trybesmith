import { Router } from 'express';
import UserController from '../controllers/user.controller';

const userRouter = Router();

const controller = new UserController();
userRouter.post('/users', controller.createUser);
userRouter.post('/login', controller.login);

export default userRouter;