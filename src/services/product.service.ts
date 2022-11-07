import connection from '../models/connection';
import ProductsModel from '../models/ProductsModel';
import { Product } from '../interfaces/Product';

export default class ProductsService {
  private model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  async create(product: Product) {
    const products: Product = await this.model.create(product);
    return products;
  }

  async getAllProducts() {
    const productsList = await this.model.getAll();
    return productsList;
  }
}
