import { Router } from "express";
import StudentController from "../controller/studentController";
import validator from "../middleware/validator";
import { CreateStudentRequest } from "../schema/StudentSchema";

const StudentRouter = Router();

StudentRouter.post(
  "/create",
  validator(CreateStudentRequest),
  StudentController.CreateStudent
);
StudentRouter.get("/", StudentController.GetAllstudent)

export default StudentRouter;
