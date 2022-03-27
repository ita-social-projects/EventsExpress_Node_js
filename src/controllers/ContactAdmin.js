const createModal = require("../models/contactAdmin");
const { db } = require("../databaseSetup");
const { DataTypes } = require("sequelize");

const ContactAdmin = createModal(db, DataTypes);
const getAllContactAdmins = async (req, res) => {
  const contacts = await ContactAdmin.findAll();
  res.json(contacts);
};

module.exports = getAllContactAdmins;



