'use strict';

module.exports = function(sequelize, DataTypes) {
  var Match = sequelize.define('matches',
  {
    challenger_1: DataTypes.INTEGER,
    challenger_2: DataTypes.INTEGER,
    draw: DataTypes.BOOLEAN,
    challenger_1_victory: DataTypes.BOOLEAN,
    challenger_1_hp_left: DataTypes.INTEGER,
    challenger_2_victory: DataTypes.BOOLEAN,
    challenger_2_hp_left: DataTypes.INTEGER,
  },
  {
    classMethods: {
      associate: function(models) {
        console.log(models);
        Match.belongsTo(models.challengers, {
          onDelete: 'cascade'
        });
        Match.hasMany(models.comments, {
          onDelete: 'cascade'
        });
      }
    }
  });

  return Match;
};