'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pet_types', [
      {
        type: 'cat',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        type: 'dog',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        type: 'parrot',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        type: 'fox',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        type: 'horse',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pet_types', null, {});
     
  },
};
