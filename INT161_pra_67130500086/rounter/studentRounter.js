const express = require('express');
const router = express.Router();

const {
    findStudentCourseById,
    createStudentCourseController,
    deleteStudentCourseController
} = require('../controller/studentController');

router.get('/courses/:courseId', findStudentCourseById);
router.post('/courses/:courseId', createStudentCourseController);
router.delete('/courses/:courseId/student/:studentId', deleteStudentCourseController);

module.exports = router;
