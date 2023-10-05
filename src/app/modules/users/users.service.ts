import config from '../../../config'
import { IUser } from './users.interface'
import { User } from './users.model'
import { gerenateUserId } from './users.utils'

// service a database logic gula lekhbo ,
// database request and respone ekhane hbe namespace.
// database request and respone hne controller a

const createUser = async (user: IUser): Promise<IUser | null> => {
  //auto generated incremental password
  //default Password

  const id = await gerenateUserId()

  user.id = id
  if (!user.password) {
    user.password = config.default_user_password
  }
  const createUser = await User.create(user)

  if (!createUser) {
    throw new Error('Failed to create User')
  }
  return createUser
}

export default {
  createUser,
}
