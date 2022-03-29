
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserCategory.init({
    userId: DataTypes.INTEGER,
    caregoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserCategory',
  });
  return UserCategory;
};