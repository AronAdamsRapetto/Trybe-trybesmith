import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import UserModel from '../models/user.model';
import connection from '../models/connection';
import User from '../interfaces/User';

dotenv.config();

export default class UserService {
  private model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public createUser = async (user: User): Promise<string> => {
    const insertId = await this.model.create(user);
    const token = this.generateToken({ id: insertId, ...user });
    return token;     
  };

  private generateToken = ({ id, username }: User) => {
    const payload = { username, id };
    const secret = process.env.JWT_SECRET;
    const token: string = jwt.sign(payload, secret as string);
    return token;
  };
}