'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airplanes',[{
      modelNumber:'boeingUK78',
      capacity:128,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      modelNumber:'boeingIND82',
      capacity:500,
      createdAt: new Date(),
      updatedAt: new Date()
    }])

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(
      'Airplanes', 
      {
        [Op.or]: [
          {modelNumber: 'boeingUK78'}, 
          {modelNumber: 'boeingIND82',}
        ]
      });
  }
};

/*

npx sequelize db:seed:all --> to seed all files in db
npx sequelize seed:generate --name <NAME.js>

*/