import { Model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.

type Month =
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

export type IAcademicSemister = {
  title: 'Autum' | 'Summer' | 'Fall';
  year: string;
  code: '01' | '02' | '03';
  startMonth: Month;
  endMonth: Month;
};

export type AcademicSemisterModel = Model<IAcademicSemister>;
