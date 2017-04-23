'use strict';

module.exports = function(sequelize, DataTypes) {
  var MoveType = sequelize.define('move_types',
  {
    name: DataTypes.STRING,
  },
  {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return MoveType;
};