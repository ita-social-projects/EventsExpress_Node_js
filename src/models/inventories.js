 
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inventories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Inventories.init({
    needQuantity: DataTypes.FLOAT,
    itemName: DataTypes.STRING,
    eventId: DataTypes.INTEGER,
    unitOfMeasuringId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Inventories',
  });
  return Inventories;
};