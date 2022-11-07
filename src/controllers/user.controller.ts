import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import UserService from '../services/user.service';

export default class UserController {
  service: UserService;

  constructor() {
    this.service = new UserService();
  }

  create = async (req: Request, res: Response) => {
    const userBody = req.body;
    const token = jwt.sign({ userBody }, 'SECRET', { expiresIn: '7d' });
    await this.service.create(req.body);
    return res.status(201).json({ token });
  };
}