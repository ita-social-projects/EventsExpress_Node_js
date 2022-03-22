const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Message.init({
    senderId: DataTypes.INTEGER,
    parentId: DataTypes.INTEGER,
    dateCreated: DataTypes.DATE,
    edited: DataTypes.BOOLEAN,
    text: DataTypes.STRING,
    chatRoomId: DataTypes.INTEGER,
    seen: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};