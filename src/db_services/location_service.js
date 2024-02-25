const { prisma } = require('../utils/prisma');

const createLocation = async (locationData) => {
    return prisma.location.create({
        data: locationData
    });
}

const getPaginatedLocations = async (skip, take, category = null) => {
    const where = {}
    if (category) {
        where.category = category;
    }

    return prisma.location.findMany({
        skip: skip - 1,
        take: take,
        where,
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

const updateByCategory = async (category, data) => {

    try {
        return prisma.$transaction(async tx => {
            throw Error()
            return tx.location.updateMany({
                where: {
                    category
                },
                data
            })
        });
        

    } catch (error) {
        throw new Error(error.message);
    }
}

const deleteLocationById = async (location_id) => {
    // Here is used deleteMany function to avoid of prisma exception in case of wrong or non-existent location_id.
    return prisma.location.deleteMany({
        where: {
            location_id
        }
    })
}

module.exports = {
    createLocation,
    getPaginatedLocations,
    getById,
    updateLocationById,
    updateByCategory,
    deleteLocationById
}