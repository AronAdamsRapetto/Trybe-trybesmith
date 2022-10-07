import { Request, Response } from 'express';
import OrderService from '../services/order.service';

export default class OrderController {
  private service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.service.getAll();
    return res.status(200).json(orders);
  };

  public createOrder = async (req: Request, res: Response) => {
    const { productsIds, id, username } = req.body;
    const newOrder = await this.service.createOrder(productsIds, { id, username });

    return res.status(201).json(newOrder);
  };
}