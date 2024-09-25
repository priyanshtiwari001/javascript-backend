const { INTERNAL_SERVER_ERROR, BAD_REQUEST, NOT_FOUND } = require('http-status-codes');
const {AirplaneRepository} = require('../repositories');
const { error } = require('../utils/common/error-response');
const AppErrors = require('../utils/error/app-errors');
const { SuccessResponse } = require('../utils/common');

const airplanerepo = new AirplaneRepository();

async function createAirplane(data){
    try {
        const airplane = await airplanerepo.create(data);
        return airplane;
    } catch (error) {
        let explanation=[]; // ye isliye banaya kyunki kya 1 sa jyda error bhi aa skte h
        error.errors.forEach(err => {
            explanation.push(err.message);
        });
     if(error.name == "SequelizeValidationError"){
        throw new AppErrors(explanation,BAD_REQUEST);  
     }
        throw new AppErrors('Cannot create a new airplane object',INTERNAL_SERVER_ERROR);
    }
}

async function getAllAirplanes(){
    try{
        const airplane = await airplanerepo.getAll();
        return airplane;
    }catch(error){
        throw new AppErrors('Cannot fetch the data of all the airplanes.',INTERNAL_SERVER_ERROR);
    }
}

async function destroyAirplane(id){
    try{
        const airplane = await airplanerepo.destroy(id);
        return airplane;
    }catch(error){
        if(error.statusCode == NOT_FOUND){
            
            throw new AppErrors('The airplane you requested to delete is not present', error.statusCode);
        }
        throw new AppErrors("Cannot fetch data of all the airplanes ",INTERNAL_SERVER_ERROR);
    }
}

async function getAirplane(id){
    try{
        const airplane = await airplanerepo.get(id);
       
        return airplane;
    }catch(error){
        if(error.statusCode == NOT_FOUND){
            
            throw new AppErrors('The airplane you requested to get is not present', error.statusCode);
        }
        throw new AppErrors("Cannot fetch data of all the airplanes ",INTERNAL_SERVER_ERROR);
    }
}

async function updateAirplane(data,id){
    try {
        const airplane = await airplanerepo.update(data,id);
        console.log(airplane);
        return airplane;
    } catch (error) {
        if(error.statusCode == NOT_FOUND){
            throw new AppErrors("The airplane you requested to update is not present",error.statusCode);
        }
        throw new AppErrors('Cannot fetch data of all the airplanes',INTERNAL_SERVER_ERROR);
    }
}


module.exports = {
    createAirplane,
    getAllAirplanes,
    destroyAirplane,
    getAirplane,
    updateAirplane
}