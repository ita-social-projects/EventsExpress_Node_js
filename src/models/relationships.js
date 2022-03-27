'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Relationships extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Relationships.init({
    userFromId: DataTypes.INTEGER,
    userToId: DataTypes.INTEGER,
    attitude: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Relationships',
  });
  return Relationships;
};