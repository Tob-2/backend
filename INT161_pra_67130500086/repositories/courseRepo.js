const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
module.exports = {
    async findAllCoursesRepo({skip, take, sortBy, order}) {
        return prisma.courses.findMany({
            skip,
            take,
            orderBy: {
                [sortBy]: order
            }
        });
    }}

