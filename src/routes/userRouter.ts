import { Router } from 'express';
import UserController from '../controllers/user.controller';

const uController = new UserController();
const userRouter = Router();

userRouter.post('/', uController.create);

export default userRouter;