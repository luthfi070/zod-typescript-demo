import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";

const validator =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (err: any) {
      res.status(500).json(err);
      throw err;
    }
  };

export default validator;
