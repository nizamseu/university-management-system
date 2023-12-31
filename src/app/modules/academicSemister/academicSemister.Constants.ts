import {
  IAcademicSemisterCode,
  IAcademicSemisterTitle,
  Month,
} from './academicSemister.interface';

export const academicSemisterMonths: Month[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const academicSemisterTitle: IAcademicSemisterTitle[] = [
  'Autum',
  'Summer',
  'Fall',
];

export const academicSemisterCode: IAcademicSemisterCode[] = ['01', '02', '03'];

export const academicSemesterTitleCodeMapper: { [key: string]: string } = {
  Autum: '01',
  Summer: '02',
  Fall: '03',
};
