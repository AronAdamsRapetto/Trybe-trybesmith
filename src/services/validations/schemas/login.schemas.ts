import Joi from 'joi';

const loginSchema = Joi.object({
  username: Joi.required(),
  password: Joi.required(),
});

export default loginSchema;
