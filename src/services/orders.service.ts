import connection from '../models/connection';
import OrdersModel from '../models/OrdersModel';
import { Order } from '../interfaces/Order';

export default class ProductsService {
  private model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  async getAll(): Promise<Order[]> {
    const ordersList = await this.model.getAll();
    return ordersList;
  }
}
