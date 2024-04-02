import { Router } from "express";
import StudentController from "../controller/studentController";
import StudentRouter from "./studentRoutes";

const App = Router();

App.use("/student", StudentRouter);

export default App;
