import { Request, Response, NextFunction } from "express";
import {
  CreateStudentResponse,
  CreateStudentRequest,
  GetAllStudentResponse,
} from "../schema/StudentSchema";
import StudentService from "../service/studentService";
import { z } from "zod";

class StudentController {
  static async CreateStudent(
    req: Request<{}, {}, z.infer<typeof CreateStudentRequest>["body"]>,
    res: Response<z.infer<typeof CreateStudentResponse>>,
    next: NextFunction
  ) {
    try {
      const student = await StudentService.createStudent(req.body);

      res.status(200).json({
        message: "create student",
      });
    } catch (error) {
      throw error;
    }
  }

  static async GetAllstudent(
    req: Request,
    res: Response<z.infer<typeof GetAllStudentResponse>[] | {}>
  ) {
    try {
      const students = await StudentService.getAllstudent();

      res.status(200).json(students);
    } catch (error) {
      throw error;
    }
  }
}

export default StudentController;
