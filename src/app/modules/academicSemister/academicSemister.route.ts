import { AcademicSemisterValidation } from './academicSemisterValidation';
import express from 'express';
// import { UserController } from './users.controller';
import validedRequest from '../../middleware/validedRequest';
import { AcademicSemesterController } from './academicSemister.controller';

const router = express.Router();

router.post(
  '/create-semester',
  validedRequest(AcademicSemisterValidation.createAcademicSemisterZodSchema),
  AcademicSemesterController.createSemester,
);

export const AcademicSemesterRoutes = { router };
