import express from 'express';
import ProductController from '../controllers/products.controller';

const productRouter = express.Router();
const productController = new ProductController();

productRouter.post('/', productController.createProduct);

export default productRouter;