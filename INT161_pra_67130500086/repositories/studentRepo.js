const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {

    async findStudentByCourseId(courseId) {
        return await prisma.course_student.findMany({
            where: { course_id: courseId },
            include: {
                students: true,
                courses: true
            }
        });
    },

    async createStudentCourseRepo(studentId, courseId, grade) {
        return await prisma.course_student.create({
            data: {
                student_id: studentId,
                course_id: courseId,
                grade: grade
            }
        });
    },

    async deleteStudentCourseRepo(stuId, couId) {
        return await prisma.course_student.delete({
            where: {
                course_id_student_id: {
                    course_id: couId,
                    student_id: stuId
                }
            }
        });
    }

};
