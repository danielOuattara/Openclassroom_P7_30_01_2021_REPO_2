'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('users', [
        {
          id: 1,
          uuid:"0a2b5816-e8f7-4349-9e4f-cdfa08729fee ",
          email:"admin1@test.com",
          password: '$2a$11$iZBMrfJc63BBvDb9hIoELOF.I.FDvq0G6kWYdAXfQkfEo263Xkcza',
          createdAt: new Date(),
          updatedAt: new Date()
        }, 
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('users', null, {});
  }
};
