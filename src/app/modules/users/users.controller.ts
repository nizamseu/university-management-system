import { Request, Response, NextFunction } from 'express'
import usersService from './users.service'

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body
    const result = await usersService.createUser(data)
    res.status(201).json({
      success: true,
      message: 'Successfully  Create User',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export default {
  createUser,
}
