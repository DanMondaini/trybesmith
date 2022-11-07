import { Pool } from 'mysql2/promise';
import { Order } from '../interfaces/Order';

export default class OrdersModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const [ordersList] = await this.connection.execute(`
    SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds
    FROM Trybesmith.Orders as o INNER JOIN Trybesmith.Products as p 
    ON o.id = p.orderId
    GROUP BY o.id
    ORDER BY o.userId
    `);

    return ordersList as Order[];
  }
}