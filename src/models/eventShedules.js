const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class eventShedules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  eventShedules.init({
    id: DataTypes.INTEGER,
    frequency: DataTypes.INTEGER,
    lastRun: DataTypes.INTEGER,
    nextRun: DataTypes.INTEGER,
    periodicity: DataTypes.CHAR,
    isActive: DataTypes.BOOLEAN,
    eventId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'eventShedules',
  });
  return eventShedules;
};