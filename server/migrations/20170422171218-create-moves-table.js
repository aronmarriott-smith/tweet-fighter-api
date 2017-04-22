'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable('moves',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      description: Sequelize.STRING,
      symbol: {
        type: Sequelize.STRING,
        indicesType: 'UNIQUE'
      },
      move_type_id: {
        type: Sequelize.INTEGER,
          references: {
              model: 'move_types',
              key: 'id'
          },
          onDelete: 'cascade'
      },
      power: {
        type: Sequelize.INTEGER,
        default: 0
      },
      hidden: {
        type: Sequelize.BOOLEAN,
        default: false,
      },
      handle: Sequelize.STRING,
      profile_image: Sequelize.STRING,
      profile_image_https: {
        type: Sequelize.STRING,
        allowNull: true
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
    queryInterface.dropTable('moves');
  }
};
