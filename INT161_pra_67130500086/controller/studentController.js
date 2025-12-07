const stuService = require('../service/studentService');

module.exports = {

    async findStudentCourseById(req, res, next) {
        try {
            const courseId = Number(req.params.courseId);
            const studentList = await stuService.findStudentCourseByIdService(courseId);
            return res.json({ status: true, data: studentList });

        } catch (err) {
            console.log(err);
            return res.status(500).json({ status: false, message: "Server error" });
        }
    },

    async createStudentCourseController(req, res) {
        try {
            const courseId = Number(req.params.courseId);
            const { studentId, grade } = req.body;

            const result = await stuService.createStudentCourseService(studentId, courseId, grade);

            return res.json({ status: true, data: result });

        } catch (err) {
            console.log(err);
            res.status(500).json({ error: err.message });
        }
    },

    async deleteStudentCourseController(req, res, next) {
        try {
            const stuId = Number(req.params.studentId);
            const couId = Number(req.params.courseId);

            const deleted = await stuService.deleteStudentCourseService(stuId, couId);

            return res.json({ status: true, data: deleted });

        } catch (err) {
            console.log(err);
            next(err);
        }
    }

}
