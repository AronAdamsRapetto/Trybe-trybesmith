import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/Product';

class ProductModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  create = async (body: Product): Promise<Product> => {
    const { name, amount } = body;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)
    `, [name, amount]);
    return { id: insertId, ...body };
  };
}

export default ProductModel;