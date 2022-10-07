import Joi from 'joi';

const arrayItem = Joi.number().min(1);
const productIdsSchema = Joi.array().min(1).items(arrayItem).required()
  .messages({
    'any.required': '"productsIds" is required',
    'array.base': '"productsIds" must be an array',
    'array.min': '"productsIds" must include only numbers',
  });

export default productIdsSchema;