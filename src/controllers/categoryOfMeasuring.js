const createCategoriesOfMeasuringsModel = require("../models/categoriesofmeasurng.js");

const { DataTypes } = require("sequelize");
const { db } = require("../databaseSetup");

const CategoriesOfMeasurings = createCategoriesOfMeasuringsModel(db, DataTypes);

const getAllCategoriesOfMeasurings = async (req, res) => {
  const categoriesOfMeasurings = await CategoriesOfMeasurings.findAll();
  res.json(categoriesOfMeasurings);
};
module.exports = { getAllCategoriesOfMeasurings };
