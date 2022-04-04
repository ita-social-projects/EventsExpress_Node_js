const createUserModel = require("../models/account");
const { DataTypes } = require("sequelize");

const { db } = require("../databaseSetup");

const Account = createUserModel(db, DataTypes);

const blockAccount = async (req, res) => {
  const { userId } = req.params;

  Account.update(
    ({ isBlocked: true },
    {
      where: {
        id: userId,
      },
    })
  );

  res.json("Block is succesful.");
};

const unblockAccount = async (req, res) => {
  const { userId } = req.params;

  Account.update(
    ({ isBlocked: false },
    {
      where: {
        id: userId,
      },
    })
  );

  res.json("Unblock is succesful.");
};

module.exports = { blockAccount, unblockAccount };
