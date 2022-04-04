 
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CategoriesOfMeasurng extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CategoriesOfMeasurng.init({
    categoryName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CategoriesOfMeasuring',
  });
  return CategoriesOfMeasurng;
};