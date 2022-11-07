import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';

const oController = new OrdersController();
const ordersRouter = Router();

ordersRouter.get('/', oController.getAll);

export default ordersRouter;