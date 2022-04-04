const {
    Model
  } = require('sequelize');
  module.exports = (sequelize, DataTypes) => {
    class ContactAdmin extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
        // define association here
      }
    }
    ContactAdmin.init({
      senderId: DataTypes.INTEGER,
      asigneeId: DataTypes.INTEGER,
      email: DataTypes.STRING,
      messageId: DataTypes.INTEGER,
      subject: DataTypes.INTEGER,
      title: DataTypes.STRING,
      emailBody: DataTypes.STRING,
      resolutionDetails: DataTypes.STRING,
      dateCreated: DataTypes.DATE,
      dateUpdated: DataTypes.DATE,
      status: DataTypes.INTEGER
    }, {
      sequelize,
      modelName: 'contactAdmin',
    });
    return ContactAdmin;
  };