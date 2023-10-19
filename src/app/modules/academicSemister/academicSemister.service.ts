import { IAcademicSemister } from './academicSemister.interface';
import { AcademicSemester } from './academicSemisterModel';

const createSemister = async (
  payload: IAcademicSemister,
): Promise<IAcademicSemister> => {
  const result = await AcademicSemester.create(payload);
  return result;
};

export const AcademicSemisterService = {
  createSemister,
};
