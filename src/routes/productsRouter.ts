import { Router } from 'express';
import ProductsController from '../controllers/products.controller';

const pController = new ProductsController();
const productsRouter = Router();

productsRouter.post('/', pController.create);
productsRouter.get('/', pController.getAllProducts);

export default productsRouter;