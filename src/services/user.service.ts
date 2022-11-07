import connection from '../models/connection';
import UserModel from '../models/UserModel';
import { User } from '../interfaces/User';

export default class UserService {
  private model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: User): Promise<User> {
    const users = await this.model.create(user);
    return users;
  }
}
