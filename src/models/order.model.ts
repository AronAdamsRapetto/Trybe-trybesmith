import { Pool } from 'mysql2/promise';
import Order from '../interfaces/Order';

export default class OrderModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAll = async (): Promise<Order[]> => {
    const [orders] = await this.connection.execute(`
    SELECT ord.id AS id,
    ord.userId AS userId,
    JSON_ARRAYAGG(pr.id) AS productsIds
    FROM Trybesmith.Orders AS ord
    JOIN Trybesmith.Products AS pr ON ord.id = pr.orderId
    GROUP BY ord.id
    `);

    return orders as Order[];
  };
}