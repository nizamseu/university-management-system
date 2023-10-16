import express from 'express'
import { UserController } from './users.controller'
import validedRequest from '../../middleware/validedRequest'
import { UserValidation } from './users.validation'

const router = express.Router()

router.post(
  '/create-user',
  validedRequest(UserValidation.createUserZodSchema),
  UserController.createUser,
)

export const UserRoutes = { router }
