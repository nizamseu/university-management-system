import { APIError } from '../../../errors/ApiError';
import { academicSemesterTitleCodeMapper } from './academicSemister.Constants';
import { IAcademicSemister } from './academicSemister.interface';
import { AcademicSemester } from './academicSemisterModel';
import { StatusCodes } from 'http-status-codes';
const createSemister = async (
  payload: IAcademicSemister,
): Promise<IAcademicSemister> => {
  if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new APIError(StatusCodes.BAD_REQUEST, 'Invalid Semester');
  }
  const result = await AcademicSemester.create(payload);
  return result;
};

export const AcademicSemisterService = {
  createSemister,
};
