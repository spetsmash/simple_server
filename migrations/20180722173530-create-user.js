'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        chatId: {
            type: Sequelize.INTEGER
        },
        step: {
          type: Sequelize.INTEGER
        },
        userId: {
          type: Sequelize.INTEGER
        },
      login: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
        twitter: {
            type: Sequelize.STRING
        },
        ethereumAddress: {
            type: Sequelize.STRING
        },
        balance: {
            type: Sequelize.STRING
        },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};