import { z, object } from "zod";

export const GetAllTeacherResponse = object({
    name: z.string(),
    age: z.number(),
    subjects: z.string()
})

