const Sequelize = require("sequelize");
const db = require("../../configDB");
const Joi = require("joi");

const { DataTypes } = Sequelize;

const Test = db.define(
  "tests",
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

const schemaCreate = Joi.object({
  test: Joi.string().required(),
});

module.exports = { Test, schemaCreate };
