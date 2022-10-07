import { Request, Response } from 'express';
import UserService from '../services/user.service';

export default class UserController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  public createUser = async (req: Request, res: Response) => {
    const { body } = req;
    const token = await this.service.createUser(body);

    res.status(201).json({ token });
  };

  public login = async (req: Request, res: Response) => {
    const { body } = req;
    const token = await this.service.login(body);

    res.status(200).json({ token });
  };
}