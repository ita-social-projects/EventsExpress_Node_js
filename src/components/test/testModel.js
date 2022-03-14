const Sequelize = require("sequelize");
const { db } = require("../../databaseSetup");
const Joi = require("joi");

const { DataTypes } = Sequelize;

const Test = db.define(
  "Test",
  {
    test: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

const modelSchema = Joi.object({
  test: Joi.string().required(),
});

module.exports = { Test, modelSchema };
