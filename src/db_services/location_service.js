const { prisma } = require('../utils/prisma');

const createLocation = async (locationData) => {
    return prisma.location.create({
        data: locationData
    });
}

const getPaginatedLocations = async (skip, take) => {
    return prisma.location.findMany({
        skip: skip - 1,
        take: take,
        orderBy: {
            location_id: 'asc'
        }
    });
} 

module.exports = {
    createLocation,
    getPaginatedLocations
}