const createModal = require("../models/events.js");
const { db } = require("../databaseSetup");
const { DataTypes } = require("sequelize");

const Events = createModal(db, DataTypes);

const getAllEvents = async (req, res) => {
  const events = await Events.findAll();
  res.json(events);
};
const getEventsById = async (req, res) => {
  const events = await Events.findAll({
    where: {
      id: req.params.id,
    },
  });
  res.json(events[0]);
};
const addEvents = async (req, res) => {
  await Events.create(req.body);
  res.json({
    message: "Events Created",
  });
};
const deleteEvents = async (req, res) => {
  await Events.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json({
    message: "Events Deleted",
  });
};

module.exports = {
  getAllEvents,
  getEventsById,
  addEvents,
  deleteEvents,
};
