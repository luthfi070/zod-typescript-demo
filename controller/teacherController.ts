import { Request, Response } from "express"
import { GetAllTeacherResponse } from "../schema/TeacherSchema"
import { z } from "zod"

class TeacherController{
    static async GetAllTeacher(req: Request, res: Response<z.infer<typeof GetAllTeacherResponse>[] | {}>) {
        try{
            res.status(200).json({
                name: 'get teacher',
                age: 20,
                subjects: 'math'
            })
        }catch(err: any){
            throw err
        }
    }
}

export default TeacherController