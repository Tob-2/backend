const couRepo = require('../repositories/courseRepo');



module.exports = {

    async findAllCoursesService(page, limit, sortBy, order) {

        const skip = (page - 1) * limit;
        const take = limit;

        return await couRepo.findAllCoursesRepo({
            skip,
            take,
            sortBy,
            order
        });
    }
}