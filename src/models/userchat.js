const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserChat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserChat.init({
    UserId: DataTypes.INTEGER,
    ChatId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserChat',
  });
  return UserChat;
};