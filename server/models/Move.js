'use strict';

module.exports = function(sequelize, DataTypes) {
  var Move = sequelize.define('moves',
  {
    description: DataTypes.STRING,
    symbol: DataTypes.STRING,
    move_type_id: DataTypes.INTEGER,
    power: DataTypes.INTEGER,
    hidden: DataTypes.BOOLEAN,
    handle: DataTypes.STRING,
    profile_image: DataTypes.STRING,
    profile_image_https: DataTypes.STRING,
    text: DataTypes.STRING,
  },
  {
    classMethods: {
      associate: function(models) {
        Move.hasOne(models.move_types, {
          onDelete: 'cascade'
        });
      }
    }
  });

  return Move;
};