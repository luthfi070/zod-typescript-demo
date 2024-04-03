import 'jest'
import StudentService from '../service/studentService'
import supertest from 'supertest'
import StudentSchema from '../model/studentModel'
import app from '../test.app';

const request = supertest(app)

describe('Get student data', () => {
    it('Can fetch data', async () => {
        const students = await request.get('/student')

        expect(students.statusCode).toEqual(200)
    })
})