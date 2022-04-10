const createCategoriesOfMeasuringsModel = require("../models/categoriesofmeasurng.js");

const { DataTypes } = require("sequelize");
const { db } = require("../databaseSetup");

const CategoriesOfMeasurings = createCategoriesOfMeasuringsModel(db, DataTypes);

const getAllCategoriesOfMeasurings = async (req, res) =>
  res.json(await CategoriesOfMeasurings.findAll());

module.exports = getAllCategoriesOfMeasurings;
