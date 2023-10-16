import { Model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.

export type Month =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type IAcademicSemisterTitle = 'Autum' | 'Summer' | 'Fall';
export type IAcademicSemisterCode = '01' | '02' | '03';

export type IAcademicSemister = {
  title: IAcademicSemisterTitle;
  year: string;
  code: IAcademicSemisterCode;
  startMonth: Month;
  endMonth: Month;
};

export type AcademicSemisterModel = Model<IAcademicSemister>;
