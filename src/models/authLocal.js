const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AuthLocal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AuthLocal.init(
    {
      email: DataTypes.STRING,
      accountId: DataTypes.INTEGER,
      passwordHash: DataTypes.STRING,
      salt: DataTypes.STRING,
      emailConfirmed: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "AuthLocal",
    }
  );

  return AuthLocal;
};
