import User from '../../interfaces/User';
import { errorThrower } from '../../utils/errorThrower';
import userSchema from './schemas/user.schemas';

const userValidation = (user: User) => {
  const { error } = userSchema.validate(user);
  if (error) {
    const statusCode = error.message.includes('required') ? 400 : 422;
    errorThrower(statusCode, error.message);
  }
};

export default userValidation;
