'use strict';
module.exports = (sequelize, DataTypes) => {
  var ShopList = sequelize.define('ShopList', {
    name: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    description:{
      allowNull: false,
      type: DataTypes.TEXT
    },
  }, {});
  ShopList.associate = function(models) {
  ShopList.hasMany(models.Item, {
    foreignKey:"shopListId",
    as:"items"
  })
  };
  return ShopList;
};
