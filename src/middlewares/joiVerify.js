const Schema =  require('../JoiSchemas/verifyingSchema');
const ErrorHandler = require('../utils/errorHandler');
const Constants = require('../utils/const_messages');

const createLocation = (req, res, next) => {
    const schema = Schema.createLocation;
    const result = schema.validate(req.body);

    if (result.error) {
        return ErrorHandler(res, 422, { message: result.error.message || Constants.VALIDATION_ERROR });
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

const getPaginatedLocationsByCategory = (req, res, next) => {
    
    if (!req.query.page || req.query.page < 1) {
        req.query.page = 1;
    } 

    if (!req.query.page_size || req.query.page_size < 1) {
        req.query.page_size = 10;
    } 

    if (!req.query.category || typeof req.query.category !== 'string' ) {
        return ErrorHandler(res, 422, { message: Constants.CATEGORY_VALIDATION_ERROR });
    }

    next();
}

const updateLocationById = (req, res, next) => {
    const schema = Schema.updateLocation;
    const result = schema.validate(req.body);

    if (result.error) {
        return ErrorHandler(res, 422, { message: result.error.message || Constants.VALIDATION_ERROR });
    }

    next();
}

const updateLocationByCategory = (req, res, next) => {
    const schema = Schema.updateLocationByCategory;
    const result = schema.validate(req.query);

    if (result.error) {
        return ErrorHandler(res, 422, { message: result.error.message || Constants.VALIDATION_ERROR });
    }

    next();

}

module.exports = {
    createLocation,
    getPaginatedLocations,
    updateLocationById,
    updateLocationByCategory,
    getPaginatedLocationsByCategory
}
