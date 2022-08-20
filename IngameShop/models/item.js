'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.hasMany(models.Transaction, {foreignKey: 'ItemId'})
    }
  }
  Item.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock: {
      type: DataTypes.INTEGER,
      validate: {
        min:{
          args: 0,
          msg: " Minimum stock is 0"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};