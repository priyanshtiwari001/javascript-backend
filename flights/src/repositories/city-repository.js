const CrudRepository = require('./crud-repository');
const {city} = require('../models');

class CityRepository extends CrudRepository{
    constructor(){
        super(city);
    }
}

module.exports=CityRepository;