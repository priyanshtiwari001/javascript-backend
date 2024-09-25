const express = require('express');
const {AirPlaneController} = require('../../controllers');
const {AirplaneMiddleware} = require('../../middlewares')
const router = express.Router();


//* api/v1/airplanes/ : POST

router.post('/',AirplaneMiddleware.validator,AirPlaneController.createAirplane);

//* api/v1/airplanes/ : GETALL
router.get('/',AirPlaneController.getAllAirplanes);

//* api/v1/airplanes/ : GET
router.get('/:id',AirPlaneController.getAirplane);

//* api/v1/airplanes : DELETE
router.delete('/:id',AirPlaneController.destroyAirplane);

//* api/v1/airplanes : UPDATE
router.patch('/:id',AirPlaneController.updateAirplane);



module.exports= router;