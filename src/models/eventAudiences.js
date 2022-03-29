const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EventAudiences extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  EventAudiences.init({
    id: DataTypes.INTEGER,
    isOnlyForAdults: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'eventAudiences',
  });
  return EventAudiences;
};