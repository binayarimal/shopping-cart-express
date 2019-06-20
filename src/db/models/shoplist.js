'use strict';
module.exports = (sequelize, DataTypes) => {
  var ShopList = sequelize.define('ShopList', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  ShopList.associate = function(models) {
    // associations can be defined here
  };
  return ShopList;
};