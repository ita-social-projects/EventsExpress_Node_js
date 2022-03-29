const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AuthExternal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AuthExternal.init(
    {
      email: DataTypes.STRING,
      accountId: DataTypes.INTEGER,
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "AuthExternal",
    }
  );

  return AuthExternal;
};
