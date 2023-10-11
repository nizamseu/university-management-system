import { Request, Response } from 'express'
import usersService from './users.service'
import globalErrorHandler from '../../middleware/globarErrorHandler'

const createUser = async (req: Request, res: Response) => {
  try {
    const data = req.body
    const result = await usersService.createUser(data)
    res.status(201).json({
      success: true,
      message: 'Successfully  Create User',
      data: result,
    })
  } catch (error) {
    globalErrorHandler()
  }
}

export default {
  createUser,
}
