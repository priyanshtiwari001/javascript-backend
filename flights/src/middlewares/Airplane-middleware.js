const { BAD_REQUEST } = require("http-status-codes");
const {ErrorResponse} = require('../utils/common');
const AppErrors = require("../utils/error/app-errors");
function validator(req,res,next){
    if(!req.body.modelNumber){
        ErrorResponse.message="Something went wrong while creating the airplane";
        ErrorResponse.error= new AppErrors(['modelNumber is not found in the oncoming request in correct form!'],BAD_REQUEST);

        return res.status(BAD_REQUEST).json(ErrorResponse);
    }

    next();
}

module.exports={
    validator
};