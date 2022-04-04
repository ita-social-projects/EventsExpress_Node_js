const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserEventInventories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserEventInventories.init(
    {
      eventId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      inventoryId: DataTypes.INTEGER,
      quantity: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "UserEventInventories",
    }
  );
  return UserEventInventories;
};
