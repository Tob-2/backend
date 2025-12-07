const express = require('express');
const router = express.Router({ mergeParams: true });
const { findAllCourses } = require('../controller/courseController');


router.get('/courses', findAllCourses);

module.exports = router;