import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Product } from '../interfaces/Product';

export default class ProductsModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(product: Product): Promise<Product> {
    const { name, amount } = product;

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    return { id: insertId, name, amount };
  }

  async getAll(): Promise<Product[]> {
    const [productsList] = await this.connection.execute('SELECT * FROM Trybesmith.Products');
    return productsList as Product[];
  }
}