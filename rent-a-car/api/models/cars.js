'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cars.init({
    brandName: DataTypes.STRING,
    modelName: DataTypes.STRING,
    seatCapacity: DataTypes.INTEGER,
    engineCapacity: DataTypes.INTEGER,
    transmission: DataTypes.STRING,
    fuelType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cars',
  });
  return Cars;
};