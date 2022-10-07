import connection from '../models/connection';
import ProductModel from '../models/products.model';
import Product from '../interfaces/Product';

class ProductService {
  model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  createProduct = async (body: Product): Promise<Product> => {
    const newProduct = await this.model.create(body);
    return newProduct;
  };
}

export default ProductService;