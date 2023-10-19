/* eslint-disable no-unused-vars */
import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middleware/globarErrorHandler';
import routers from './app/routes';
import { StatusCodes } from 'http-status-codes';
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

// handle not Found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessage: [{ path: req.originalUrl, message: 'API Not Found' }],
  });
  next();
});

// tesing route
app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  throw new Error('testing Errro');
});

export default app;
