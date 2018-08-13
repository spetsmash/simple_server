'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
        queryInterface.addColumn(
            'Users',
            'verification',
            {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false
            }
        ),
        queryInterface.addColumn(
            'Users',
            'token',
            {
                type: Sequelize.STRING,
                allowNull: true
            }
        )
    ];
    // return queryInterface.addColumn('Users', 'verification', Sequelize.BOOLEAN)
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
      return [
          queryInterface.removeColumn(
              'Users',
              'verification'
              ),
          queryInterface.removeColumn(
              'Users',
              'token'
          )
      ];
    // return queryInterface.removeColumn('Users', 'verification');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
