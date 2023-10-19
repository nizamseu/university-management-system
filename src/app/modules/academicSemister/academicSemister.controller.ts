import { RequestHandler } from 'express';
import { AcademicSemisterService } from './academicSemister.service';

const createSemester: RequestHandler = async (req, res, next) => {
  try {
    const { ...academisSemesterData } = req.body;
    console.log('academisSemesterData', academisSemesterData);

    const result =
      await AcademicSemisterService.createSemister(academisSemesterData);
    console.log('result', result);

    res.status(201).json({
      success: true,
      message: 'Successfully  Create Semester',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const AcademicSemesterController = {
  createSemester,
};
