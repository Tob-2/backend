const stuRepo = require('../repositories/studentRepo');

module.exports = {

    async findStudentCourseByIdService(courseId) {
        return await stuRepo.findStudentByCourseId(courseId);
    },

    async createStudentCourseService(studentId, courseId, grade) {
        return await stuRepo.createStudentCourseRepo(studentId, courseId, grade);
    },

    async deleteStudentCourseService(stuId, couId) {
        return await stuRepo.deleteStudentCourseRepo(stuId, couId);
    }

}
