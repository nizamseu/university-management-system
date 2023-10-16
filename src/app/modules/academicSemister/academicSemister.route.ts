import { AcademicSemisterValidation } from './academicSemisterValidation';
import express from 'express';
// import { UserController } from './users.controller';
import validedRequest from '../../middleware/validedRequest';

const router = express.Router();

router.post(
  '/create-user',
  validedRequest(AcademicSemisterValidation.createAcademicSemisterZodSchema),
  //   UserController.createUser,
);

export const UserRoutes = { router };
