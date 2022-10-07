import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import UserModel from '../models/user.model';
import connection from '../models/connection';
import User from '../interfaces/User';
import Login from '../interfaces/login';
import validateLoginFields from './validations/login.validation';
import { errorThrower } from '../utils/errorThrower';

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

  public login = async (user: Login) => {
    validateLoginFields(user);

    const isUserExist = await this.model.getUserByLogin(user);
    if (!isUserExist) errorThrower(401, 'Username or password invalid');
    return this.generateToken(isUserExist);
  };

  private generateToken = ({ username, id }: User) => {
    const payload = { username, id };
    // const secret = process.env.JWT_SECRET;
    const secret = 'SENHASUPERSECRETA';
    const token: string = jwt.sign(payload, secret as string);
    return token;
  };
}