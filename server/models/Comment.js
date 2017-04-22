'use strict';

module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define('comments',
  {
    match_id: DataTypes.INTEGER,
    text: DataTypes.STRING,
  },
  {
    classMethods: {
      associate: function(models) {
        Comment.belongsTo(models.matches);
      }
    }
  });

  return Comment;
};