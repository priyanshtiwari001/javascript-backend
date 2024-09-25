const express = require('express');
const router = express.Router();
const { CityController } = require('../../controllers');
const { CityMiddleware } = require('../../middlewares');
//* api/v1/city/

router.post('/',  CityMiddleware.validator,  CityController.createCity)



module.exports=router;