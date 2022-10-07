import { Response, Request } from 'express';
import ProductService from '../services/products.service';

class ProductController {
  service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  createProduct = async (req: Request, res: Response) => {
    const { body } = req;
    const createdProduct = await this.service.createProduct(body);

    res.status(201).json(createdProduct);
  };

  getAll = async (_req: Request, res: Response) => {
    const products = await this.service.getAll();

    res.status(200).json(products);
  };
}

export default ProductController;