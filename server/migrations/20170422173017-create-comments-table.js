'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable('comments',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      match_id: {
        type: Sequelize.INTEGER,
          references: {
              model: 'matches',
              key: 'id'
          },
          onDelete: 'cascade'
      },
      text: Sequelize.STRING,
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('comments');
  }
};
