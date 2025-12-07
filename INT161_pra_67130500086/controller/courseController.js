const courseService = require('../service/courseService');

module.exports = {

    async findAllCourses(req, res, next) {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const sortBy = req.query.sortBy || 'id';
        const order = req.query.orderBy || 'asc';

        const course = await courseService.findAllCoursesService(page, limit, sortBy, order);
        return res.json({data: course});
    }catch (error) {
    console.log(error);}
    }}

