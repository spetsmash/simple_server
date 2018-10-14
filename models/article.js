'use strict';
module.exports = (sequelize, DataTypes) => {
  var Article = sequelize.define('Article', {
      date: DataTypes.STRING,
      title: DataTypes.STRING,
    text: DataTypes.STRING,
    type: DataTypes.STRING
    //   verification: DataTypes.BOOLEAN,
    //   token: DataTypes.STRING,
    // twitter: DataTypes.STRING,
    // ethereumAddress: DataTypes.STRING,
    // balance: DataTypes.INTEGER

  }, {});
    Article.associate = function(models) {
    // associations can be defined here
  };
  return Article;
};