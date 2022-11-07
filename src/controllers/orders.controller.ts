import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';

export default class OrdersController {
  private service: OrdersService;
  
  constructor() {
    this.service = new OrdersService();
  }
  
  public getAll = async (req: Request, res: Response) => {
    const ordersList = await this.service.getAll();
    return res.status(200).json(ordersList);
  };
}