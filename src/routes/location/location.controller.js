const ErrorHandler = require('../../utils/errorHandler');
const LocationService = require('../../db_services/location_service')


const createLocation = async (req, res) => {
    const newLocation = req.body;
    try {
        const returnValue = await LocationService.createLocation(newLocation);
        
        return res.status(201).json({ location_id: returnValue.location_id, message: 'Successfully created' });
    } catch(error) {
        return ErrorHandler(res, error.code || 400, error)
    }
}

const getPaginatedLocations = async (req, res) => {
    try {
        const { page } = req.body;
        const { page_size } = req.body;

        const returnValue = await LocationService.getPaginatedLocations(page, page_size);
        
        return res.status(200).json({ data: returnValue});
    } catch(error) {
        console.log('error>>>', error);
        return ErrorHandler(res, error.code || 400, error)
    }
}

module.exports = {
    createLocation,
    getPaginatedLocations
}