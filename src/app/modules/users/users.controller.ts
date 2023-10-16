import { RequestHandler } from 'express';
import { UserService } from './users.service';

const createUser: RequestHandler = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await UserService.createUser(data);
    res.status(201).json({
      success: true,
      message: 'Successfully  Create User',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const UserController = {
  createUser,
};
