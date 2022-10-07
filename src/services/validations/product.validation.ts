import Product from '../../interfaces/Product';
import { errorThrower } from '../../utils/errorThrower';
import ProductSchema from './schemas/product.schemas';

const productValidation = (product: Product) => {
  const { error } = ProductSchema.validate(product);
  if (error) {
    const statusCode = error.message.includes('required') ? 400 : 422;
    errorThrower(statusCode, error.message);
  }
};

export default productValidation;