import { User } from './users.model';

export const findLastUser = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean();
  return lastUser?.id;
};

export const gerenateUserId = async () => {
  const currentId = (await findLastUser()) || (0).toString().padStart(5, '0');
  const incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0');
  return incrementedId;
  //   lastUserId++
  //   return String(lastUserId).padStart(5, '0')
};
