import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

const validedRequest =
  (Schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await Schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
        cookies: req.cookies,
      });
      return next();
    } catch (error) {
      next(error);
    }
  };

export default validedRequest;
