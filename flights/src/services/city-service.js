const {INTERNAL_SERVER_ERROR, CONFLICT, BAD_REQUEST} = require('http-status-codes');
const { CityRepository } = require('../repositories');
const AppErrors = require('../utils/error/app-errors');


const cityCrudRepo = new CityRepository();
console.log(cityCrudRepo);

async function createCity(data){
    try {
        const city = await cityCrudRepo.create(data);
    return city;
    } catch (error) {
        let explanation=[]; // ye isliye banaya kyunki kya 1 sa jyda error bhi aa skte h
        error.errors.forEach(err => {
            explanation.push(err.message);
        });
       
     if(error.name == "SequelizeUniqueConstraintError" || error.name == "SequelizeValidationError"){
        throw new AppErrors(explanation ,BAD_REQUEST);  
     }
        throw new AppErrors('Cannot create a new airplane object',INTERNAL_SERVER_ERROR);
    }
    

}


module.exports={
    createCity
}