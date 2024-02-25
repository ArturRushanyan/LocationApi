const Joi = require('joi');

module.exports = {
    createLocation: Joi.object().keys({
        name: Joi.string().required().min(3).max(40).trim(),
        description: Joi.string().required().trim(),
        category: Joi.string().required().min(3).max(40).trim(),
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
    }),
    updateLocation: Joi.object().keys({
        name: Joi.string().min(3).max(40).trim(),
        description: Joi.string().trim(),
        category: Joi.string().min(3).max(40).trim(),
        latitude: Joi.number(),
        longitude: Joi.number(),
    }),
    updateLocationByCategory: Joi.object().keys({
        name: Joi.string().min(3).max(40).trim(),
        description: Joi.string().trim(),
        category: Joi.string().min(3).max(40).trim(),
        latitude: Joi.number(),
        longitude: Joi.number(),
    }),
};

