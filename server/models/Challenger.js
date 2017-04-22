'use strict';

module.exports = function(sequelize, DataTypes) {
  var Challenger = sequelize.define('challengers',
  {
    match_id: DataTypes.INTEGER,
    text: DataTypes.STRING,
  },
  {
    classMethods: {
      associate: function(models) {
        Challenger.hasOne(models.matches, { foreignKey: 'challenger_1' });
        Challenger.hasOne(models.matches, { foreignKey: 'challenger_2' });

        Challenger.hasOne(models.moves, { foreignKey: 'attack_1' });
        Challenger.hasOne(models.moves, { foreignKey: 'attack_2' });
        Challenger.hasOne(models.moves, { foreignKey: 'attack_3' });

        Challenger.hasOne(models.moves, { foreignKey: 'defence_1' });
        Challenger.hasOne(models.moves, { foreignKey: 'defence_2' });
        Challenger.hasOne(models.moves, { foreignKey: 'defence_3' });
      }
    }
  });

  return Challenger;
};