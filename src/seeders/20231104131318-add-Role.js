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
    await queryInterface.bulkInsert('Roles', [
      {
        Name: 'ADMIN',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
         Name:'AIRPLANE_BUISNESS',
         createdAt:new Date(),
         updatedAt:new Date()
       },
       {
        Name:'USER',
        createdAt:new Date(),
        updatedAt:new Date()
       }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
