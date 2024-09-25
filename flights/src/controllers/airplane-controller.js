const {StatusCodes, INTERNAL_SERVER_ERROR, OK} = require('http-status-codes')
const {AirplaneService} = require('../services')
const {ErrorResponse,SuccessResponse} = require('../utils/common');


// it is a post request
// data --> request body --> {modelNumber:'anb220,capacity:200}

async function createAirplane(req,res){
    try {

        const airplane = await AirplaneService.createAirplane({
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity
        })
       SuccessResponse.data=airplane;

        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error=error;

        return res.status(error.statusCode).json(ErrorResponse)
    }

}

async function getAllAirplanes(req,res){
    try {
        const airplane = await AirplaneService.getAllAirplanes();
    SuccessResponse.data=airplane;

    return res.status(OK).json(SuccessResponse);
    } catch (error) {
        
        ErrorResponse.error=error;
        return res.status(INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

async function destroyAirplane(req,res){
    try {
        const airplane = await AirplaneService.destroyAirplane(req.params.id);
        SuccessResponse.data=airplane;
        return res.status(OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

async function getAirplane(req,res){
    try {
        const airplane = await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.data=airplane;
        return res.status(OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

async function updateAirplane(req,res){
    try {
        const airplane = await AirplaneService.updateAirplane({
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity
        },req.params.id);
        console.log(airplane);
        SuccessResponse.data=airplane;
        return res.status(OK).json(SuccessResponse);
    } catch (error) {
        console.log(error);
        ErrorResponse.error=error;
        return res.status(INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

module.exports={
    createAirplane,
    getAllAirplanes,
    destroyAirplane,
    getAirplane,
    updateAirplane
}