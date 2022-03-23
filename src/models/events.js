'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  events.init({
  id: {type: DataTypes.INTEGER,
  primaryKey:true},
    title: DataTypes.CHAR,
    description: DataTypes.TEXT,
    dateFrom: DataTypes.DATE,
    dateTo: DataTypes.DATE,
    maxParticipants: DataTypes.INTEGER,
    isPublic: DataTypes.BOOLEAN,
    eventLocationId: DataTypes.INTEGER,
    eventAudienceId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'events',
  });
  return events;
};