import Order from '../interfaces/Order';
import connection from '../models/connection';
import OrderModel from '../models/order.model';

export default class OrderService {
  private model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public getAll = async (): Promise<Order[]> => {
    const orders = await this.model.getAll();
    return orders;
  };
}