'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Airports',{
      fields:['cityId'],
      type:'foreign key',
      name:'city_fk_name',
      references:{
        table:'cities',
        field:'id'
      },
      onDelete:'CASCADE',
      onUpdate:"CASCADE"
    })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeConstraint('Airports','city_fk_name');
  }
};
