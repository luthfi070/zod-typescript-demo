import { z } from "zod";
import { CreateStudentRequest } from "../schema/StudentSchema";
import StudentSchema from "../model/studentModel";

class StudentService {
  static async createStudent(
    data: z.infer<typeof CreateStudentRequest>["body"]
  ) {
    try {
      const student = await StudentSchema.create(data)

      return student
    } catch (err) {
      throw err;
    }
  }

  static async getAllstudent(){
    try{
      const students = await StudentSchema.find()

      return students
    }catch(err){
      throw err
    }
  }
}

export default StudentService;
