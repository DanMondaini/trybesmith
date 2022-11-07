import { Request, Response } from 'express';
import ProductsService from '../services/product.service';
import { Product } from '../interfaces/Product';

export default class ProductsController {
  private service: ProductsService;
  
  constructor() {
    this.service = new ProductsService();
  }
  
  public create = async (req: Request<Product>, res: Response) => {
    const product = req.body;
    const productsBody = await this.service.create(product);
    return res.status(201).json(productsBody);
  };

  public getAllProducts = async (req: Request, res: Response) => {
    const productsList = await this.service.getAllProducts();
    return res.status(200).json(productsList);
  };
}