import { object, string, z } from "zod";

export const CreateStudentResponse = object({
  message: z.string(),
});

export const CreateStudentRequest = object({
  body: object({
    name: z.string({
      required_error: "Name is required",
    }),
    age: z.number(),
  }),
});

export const GetAllStudentResponse = object({
  _id: z.string(),
  name: z.string(),
  age: z.number(),
  __v: z.number()
})
