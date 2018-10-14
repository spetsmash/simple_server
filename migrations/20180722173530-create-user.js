'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Article', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        date: {
            type: Sequelize.STRING
        },
        title: {
          type: Sequelize.STRING
        },
        text: {
          type: Sequelize.STRING
        },
      type: {
        type: Sequelize.STRING
      }
      // email: {
      //   type: Sequelize.STRING
      // }
      //   twitter: {
      //       type: Sequelize.STRING
      //   },
      //   ethereumAddress: {
      //       type: Sequelize.STRING
      //   },
      //   balance: {
      //       type: Sequelize.STRING
      //   },
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};