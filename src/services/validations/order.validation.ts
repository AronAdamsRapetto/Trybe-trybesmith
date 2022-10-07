import { errorThrower } from '../../utils/errorThrower';
import productIdsSchema from './schemas/order.schema';

const validationOrder = (productIds: number[]) => {
  const { error } = productIdsSchema.validate(productIds);
  console.log(error);
  if (error) {
    const statusCode = error.message.includes('required') ? 400 : 422;
    errorThrower(statusCode, error.message);
  }
};

export default validationOrder;