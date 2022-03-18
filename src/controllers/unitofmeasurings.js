const createUserModel = require('../models/unitofmeasurings.js');

const { DataTypes } = require("sequelize");
const { db } = require("../databaseSetup");

const UnitOfMeasurings = createUserModel(db, DataTypes);

const getAllUnitOfMeasurings = async (req, res) => {
  try {
    const unitOfMeasurings = await UnitOfMeasurings.findAll();
    res.json(unitOfMeasurings);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getUnitOfMeasuringsById = async (req, res) => {
  try {
    const unitOfMeasuring = await UnitOfMeasurings.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(unitOfMeasuring[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const addUnitOfMeasurings = async (req, res) => {
  console.log(req.query)
  try {
    await UnitOfMeasurings.create(req.query);
    res.json({
      message: 'UnitOfMeasurings Created',
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const editUnitOfMeasurings = async (req, res) => {
  console.log(req.query)
  try {
    await UnitOfMeasurings.update(req.query, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: 'UnitOfMeasurings Edited',
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const deleteUnitOfMeasurings = async (req, res) => {
  try {
    await UnitOfMeasurings.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: 'UnitOfMeasurings Deleted',
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  addUnitOfMeasurings,
  editUnitOfMeasurings,
  deleteUnitOfMeasurings,
  getAllUnitOfMeasurings,
  getUnitOfMeasuringsById,
};
