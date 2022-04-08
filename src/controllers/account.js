const createUserModel = require("eventsexpress-database-npm-package/lib/models/account");
const { DataTypes } = require("sequelize");

const { db } = require("../databaseSetup");

const Account = createUserModel(db, DataTypes);

const blockAccount = async (req, res) => {
  const { userId } = req.params;

  await Account.update(
    { isBlocked: 1 },
    {
      where: {
        userId,
      },
    }
  );

  res.json("Block is succesful.");
};

const unblockAccount = async (req, res) => {
  const { userId } = req.params;

  await Account.update(
    { isBlocked: 0 },
    {
      where: {
        userId,
      },
    }
  );

  res.json("Unblock is succesful.");
};

module.exports = { blockAccount, unblockAccount };
