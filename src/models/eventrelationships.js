 
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EventRelationships extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EventRelationships.init({
    userFromId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
    discriminator: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EventRelationships',
  });
  return EventRelationships;
};