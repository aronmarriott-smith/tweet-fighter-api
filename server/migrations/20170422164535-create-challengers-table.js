'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable('challengers',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      handle: Sequelize.STRING,
      profile_image: Sequelize.STRING,
      profile_image_https: {
        type: Sequelize.STRING,
        allowNull: true
      },
      text: Sequelize.STRING,
      attack_1: {
          type: Sequelize.INTEGER,
          references: {
              model: 'moves',
              key: 'id'
          },
          onDelete: 'cascade'
      },
      attack_2: {
          type: Sequelize.INTEGER,
          references: {
              model: 'moves',
              key: 'id'
          },
          onDelete: 'cascade'
      },
      attack_3: {
          type: Sequelize.INTEGER,
          references: {
              model: 'moves',
              key: 'id'
          },
          onDelete: 'cascade'
      },
      defence_1: {
          type: Sequelize.INTEGER,
          references: {
              model: 'moves',
              key: 'id'
          },
          onDelete: 'cascade'
      },
      defence_2: {
          type: Sequelize.INTEGER,
          references: {
              model: 'moves',
              key: 'id'
          },
          onDelete: 'cascade'
      },
      defence_3: {
          type: Sequelize.INTEGER,
          references: {
              model: 'moves',
              key: 'id'
          },
          onDelete: 'cascade'
      },
      battle_cry: {
        type: Sequelize.STRING,
        allowNull: true
      },
      moves: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('challengers');
  }
};
