import Order from '../interfaces/Order';
import { Logged } from '../middlewares/auth.middleware';
import connection from '../models/connection';
import OrderModel from '../models/order.model';
import validationOrder from './validations/order.validation';

export default class OrderService {
  private model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public getAll = async (): Promise<Order[]> => {
    const orders = await this.model.getAll();
    return orders;
  };

  public createOrder = async (productsIds: number[], { id }: Logged) => {
    validationOrder(productsIds);

    await this.model.create(productsIds, id);

    return { userId: id, productsIds };
  };
}