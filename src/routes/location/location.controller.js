const ErrorHandler = require('../../utils/errorHandler');
const LocationService = require('../../db_services/location_service')
const Constants = require('../../utils/const_messages');

const createLocation = async (req, res) => {
    const newLocation = req.body;
    try {
        const returnValue = await LocationService.createLocation(newLocation);
        
        return res.status(201).json({ location_id: returnValue.location_id, message: Constants.SUCCESSFULLY_CREATED });
    } catch(error) {
        return ErrorHandler(res, error.code || 400, error)
    }
}

const getPaginatedLocations = async (req, res) => {
    try {
        const { page } = req.body;
        const { page_size } = req.body;

        const returnValue = await LocationService.getPaginatedLocations(page, page_size);
        
        return res.status(200).json({ data: returnValue });
    } catch(error) {
        return ErrorHandler(res, error.code || 400, error)
    }
}

const getLocationById = async (req, res) => {
    try {
        const { location_id } = req.params;

        const returnValue = await LocationService.getById(parseInt(location_id))

        return res.status(200).json({ data: returnValue });

    } catch(error) {
        return ErrorHandler(res, error.code || 400, error)
    }
}

const updateLocationById = async (req, res) => {
    try {
        const data = req.body;
        const { location_id } = req.params;

        await LocationService.updateLocationById(parseInt(location_id), data);

        return res.status(200).json({ message: Constants.SUCCESSFULLY_UPDATED });

    } catch (error) {
        return ErrorHandler(res, error.code || 400, error)
    }
}

const updateLocationByCategory = async (req, res) => {
    try {
        const category = req.query.category
        const data = req.query;
        delete data.category;

        const returnValue = await LocationService.updateByCategory(category, data);

        return res.status(200).json({ countOfUpdatedEntities: returnValue.count, message: Constants.SUCCESSFULLY_UPDATED })
    } catch (error) {
        return ErrorHandler(res, error.code || 400, error)
    }
}

const deleteLocationById = async (req, res) => {
    try {
        const { location_id } = req.params;

        await LocationService.deleteLocationById(parseInt(location_id));

        return res.status(200).json({ message: Constants.SUCCESSFULLY_DELETED, location_id });
    } catch (error) {
        return ErrorHandler(res, error.code || 400, error)
    }
}

const getPaginatedLocationsByCategory =  async (req, res) => {
    try {
        const { page, page_size, category } = req.query;

        const returnValue = await LocationService.getPaginatedLocations(parseInt(page), parseInt(page_size), category);

        return res.status(200).json({ data: returnValue })
    } catch (error) {
        return ErrorHandler(res, error.code || 400, error)
    }
}

module.exports = {
    createLocation,
    getPaginatedLocations,
    getLocationById,
    updateLocationById,
    updateLocationByCategory,
    deleteLocationById,
    getPaginatedLocationsByCategory
}