/* eslint-disable no-unused-vars */
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middleware/globarErrorHandler';
import routers from './app/routes';

// import { APIError } from './errors/ApiError'

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);
// Application Route

// app.use('/api/v1/users', UserRoutes.router);
// app.use('/api/v1/academic-semesters', AcademicSemesterRoutes.router);

app.use('/api/v1', routers);

//global error handler
app.use(globalErrorHandler);

// tesing route
app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  throw new Error('testing Errro');
});

export default app;
