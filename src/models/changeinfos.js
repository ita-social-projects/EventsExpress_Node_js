const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ChangeInfos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ChangeInfos.init({
    entityName: DataTypes.STRING,
    entityKeys: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    propertyChangesText: DataTypes.STRING,
    changesType: DataTypes.INTEGER,
    time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ChangeInfos',
  });
  return ChangeInfos;
};