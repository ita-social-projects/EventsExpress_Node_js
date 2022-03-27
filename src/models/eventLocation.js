const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EventLocationts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  EventLocationts.init({
    id: DataTypes.INTEGER,
    point: DataTypes.GEOMETRY,
    onlineMeeting: DataTypes.BOOLEAN,
    type: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'eventLocationts',
  });
  return EventLocationts;
};