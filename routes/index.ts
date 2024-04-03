import { Router } from "express";
import StudentController from "../controller/studentController";
import StudentRouter from "./studentRoutes";
import TeacherRouter from "./teachRoutes";

const App = Router();

App.use("/student", StudentRouter);
App.use("/teacher", TeacherRouter)

export default App;
