import Login from '../../interfaces/login';
import { errorThrower } from '../../utils/errorThrower';
import loginSchema from './schemas/login.schemas';

const validateLoginFields = (user: Login) => {
  const { error } = loginSchema.validate(user);
  if (error) errorThrower(400, error.message);
};

export default validateLoginFields;