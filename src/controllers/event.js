const createModal = require('eventsexpressdb_bylesia/lib/models/events.js');
const { db } = require('../databaseSetup');
const { DataTypes } = require('sequelize');

const Events = createModal(db, DataTypes);

const getAllEvents = async (req, res) => {
  const events = await Events.findAll();
  res.json(events);
};
const getEventsById = async (req, res) => {
  const events = await Events.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.json(events);
};
const editEvents = async (req, res) => {
  await Events.update(req.body, {
  where: {
    id: req.params.id,
  },
});
  res.json({
    message: 'Events Edited',
  });
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
  editEvents,
};
