 
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UnitOfMeasurings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UnitOfMeasurings.init({
    unitName: DataTypes.STRING,
    shortName: DataTypes.STRING,
    isDeleted: DataTypes.BOOLEAN,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UnitOfMeasurings',
  });
  return UnitOfMeasurings;
};