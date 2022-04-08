const createUserModel = require("eventsexpress-database-npm-package/lib/models/unitofmeasurings.js");

const { DataTypes } = require("sequelize");
const { db } = require("../databaseSetup");

const UnitOfMeasurings = createUserModel(db, DataTypes);

const getAllUnitOfMeasurings = async (req, res) => {
  const unitOfMeasurings = await UnitOfMeasurings.findAll();
  res.json(unitOfMeasurings);
};

const getUnitOfMeasuringsById = async (req, res) => {
  const unitOfMeasuring = await UnitOfMeasurings.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.json(unitOfMeasuring);
};

const addUnitOfMeasurings = async (req, res) => {
  await UnitOfMeasurings.create(req.body);
  res.json({
    message: "UnitOfMeasurings Created",
  });
};

const editUnitOfMeasurings = async (req, res) => {
  await UnitOfMeasurings.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.json({
    message: "UnitOfMeasurings Edited",
  });
};

const deleteUnitOfMeasurings = async (req, res) => {
  await UnitOfMeasurings.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json({
    message: "UnitOfMeasurings Deleted",
  });
};

module.exports = {
  addUnitOfMeasurings,
  editUnitOfMeasurings,
  deleteUnitOfMeasurings,
  getAllUnitOfMeasurings,
  getUnitOfMeasuringsById,
};
