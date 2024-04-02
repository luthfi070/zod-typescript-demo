import { z } from "zod";
import { CreateStudentRequest } from "../schema/StudentSchema";

class StudentService {
  static async createStudent(
    data: z.infer<typeof CreateStudentRequest>["body"]
  ) {
    try {
      console.log(data);
    } catch (err) {
      throw err;
    }
  }
}

export default StudentService;
