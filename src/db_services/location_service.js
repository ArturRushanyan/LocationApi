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

const getById = async (location_id) => {
    return prisma.location.findFirst({
        where: {
            location_id
        }
    })
}

const updateLocationById = async (location_id, data) => {
    return prisma.location.update({
        where: {
            location_id
        },
        data,
        
    })
}

module.exports = {
    createLocation,
    getPaginatedLocations,
    getById,
    updateLocationById
}