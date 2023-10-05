import { Request, Response } from 'express'
import usersService from './users.service'

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
    res.status(400).json({
      success: false,
      message: 'Failed To Create User',
    })
  }
}

export default {
  createUser,
}
