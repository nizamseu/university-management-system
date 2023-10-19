import express from 'express';
import { UserRoutes } from '../modules/users/users.route';
import { AcademicSemesterRoutes } from '../modules/academicSemister/academicSemister.route';

const router = express.Router();

// const moduleRoutes = [
//   {
//     path: '/users',
//     route: UserRoutes,
//   },
//   {
//     path: '/academic-semesters',
//     route: AcademicSemesterRoutes,
//   },
// ];

// moduleRoutes.forEach(item => router.use(item.path, item.route));

router.use('/users', UserRoutes.router);
router.use('/academic-semesters', AcademicSemesterRoutes.router);

export default router;
