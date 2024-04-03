import { Router } from "express";
import TeacherController from "../controller/teacherController";

const TeacherRouter = Router()

TeacherRouter.get('/', TeacherController.GetAllTeacher)

export default TeacherRouter