'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('user_roles', [
        {
          roleId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }, 
        {
          roleId: 3,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }, 
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('user_roles', null, {});
  }
};
