'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable('matches',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      challenger_1: {
        type: Sequelize.INTEGER,
          references: {
              model: 'challengers',
              key: 'id'
          },
          onDelete: 'cascade'
      },
      challenger_2: {
        type: Sequelize.INTEGER,
          references: {
              model: 'challengers',
              key: 'id'
          },
          onDelete: 'cascade'
      },
      draw: {
        type: Sequelize.BOOLEAN,
        default: false,
      },
      challenger_1_victory: {
        type: Sequelize.BOOLEAN,
        default: false,
      },
      challenger_1_hp_left: Sequelize.INTEGER,
      challenger_2_victory: {
        type: Sequelize.BOOLEAN,
        default: false,
      },
      challenger_2_hp_left: Sequelize.INTEGER,
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('matches');
  }
};
