const Schema =  require('../JoiSchemas/verifayingSchema');
const ErrorHandler = require('../utils/errorHandler');
const Constants = require('../utils/const_messages');

const createLocation = (req, res, next) => {
    const schema = Schema.createLocation;
    const result = schema.validate(req.body);

    if (result.error) {
        return ErrorHandler(res, 422, { message: Constants.VALIDATION_ERROR });
    }

    next();
};

const getPaginatedLocations = (req, res, next) => {
    
    if (!req.body.page || req.body.page < 1) {
        req.body.page = 1;
    } 

    if (!req.body.page_size || req.body.page_size < 1) {
        req.body.page_size = 10;
    } 

    next();
}

const updateLocationById = (req, res, next) => {
    const schema = Schema.updateLocation;
    const result = schema.validate(req.body);

    if (result.error) {
        return ErrorHandler(res, 422, { message: Constants.VALIDATION_ERROR });
    }

    next();
}

module.exports = {
    createLocation,
    getPaginatedLocations,
    updateLocationById
}
