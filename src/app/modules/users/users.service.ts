import config from '../../../config';
import { APIError } from '../../../errors/ApiError';
import { IUser } from './users.interface';
import { User } from './users.model';
import { gerenateUserId } from './users.utils';

// service a database logic gula lekhbo ,
// database request and respone ekhane hbe namespace.
// database request and respone hne controller a

const createUser = async (user: IUser): Promise<IUser | null> => {
  //auto generated incremental password
  //default Password

  const id = await gerenateUserId();

  user.id = id;
  if (!user.password) {
    user.password = config.default_user_password;
  }
  const createUser = await User.create(user);

  if (!createUser) {
    throw new APIError(400, 'Failed to create User');
  }
  return createUser;
};

export const UserService = {
  createUser,
};
