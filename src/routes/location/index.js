const express = require('express');

const router = express.Router();

const locationController = require('./location.controller');
const validateWithJoi = require('../../middlewares/joiVerify');

router.post('/locations', validateWithJoi.createLocation, locationController.createLocation);
router.get('/locations', validateWithJoi.getPaginatedLocations, locationController.getPaginatedLocations);
router.get('/locations/:location_id', locationController.getLocationById);
router.patch('/locations/:location_id', validateWithJoi.updateLocationById, locationController.updateLocationById);
router.patch('/locations', validateWithJoi.updateLocationByCategory, locationController.updateLocationByCategory);
router.delete('/locations/:location_id', locationController.deleteLocationById);


module.exports = router;