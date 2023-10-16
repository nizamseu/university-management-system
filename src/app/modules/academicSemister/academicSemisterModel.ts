import { Schema, model } from 'mongoose';
import {
  AcademicSemisterModel,
  IAcademicSemister,
} from './academicSemister.interface';
import {
  academicSemisterCode,
  academicSemisterMonths,
  academicSemisterTitle,
} from './academicSemister.Constants';

const academicSemisterSchema = new Schema<IAcademicSemister>(
  {
    title: { type: String, required: true, enum: academicSemisterTitle },
    year: { type: String, required: true },
    code: {
      type: String,
      required: true,
      enum: academicSemisterCode,
    },
    startMonth: {
      type: String,
      required: true,
      enum: academicSemisterMonths,
    },
    endMonth: {
      type: String,
      required: true,
      enum: academicSemisterMonths,
    },
  },
  {
    timestamps: true,
  },
);

export const User = model<IAcademicSemister, AcademicSemisterModel>(
  'AcademicSemister',
  academicSemisterSchema,
);
