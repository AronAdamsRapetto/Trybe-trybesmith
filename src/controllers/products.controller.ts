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
}

export default ProductController;