const Sequelize = require("sequelize");
const { db } = require("../../databaseSetup");
const Joi = require("joi");

const { DataTypes } = Sequelize;

const Test = db.define(
  "Test",
  {
    Test: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

const modelSchema = Joi.object({
  Test: Joi.string().required(),
});

module.exports = { Test, modelSchema };
