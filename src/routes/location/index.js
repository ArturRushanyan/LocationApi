const express = require('express');

const router = express.Router();

const locationController = require('./location.controller');
const validateWithJoi = require('../../middlewares/joiVerify') 

router.post('/locations', validateWithJoi.createLocation, locationController.createLocation);
router.get('/locations', validateWithJoi.getPaginatedLocations, locationController.getPaginatedLocations);

module.exports = router;