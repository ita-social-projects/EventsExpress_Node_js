const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class eventOrganizers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  eventOrganizers.init({
    id: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'event_organizers',
  });
  return eventOrganizers;
};