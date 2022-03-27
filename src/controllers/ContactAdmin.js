const createModel = require("../models/ContactAdmin");
const { db } = require("../databaseSetup");
const { DataTypes } = require("sequelize");

const ContactAdmin = createModel(db, DataTypes);

const getAdmins = async (req, res) => {
  const admins = await ContactAdmin.findAll();
  res.json(admins);
};

const getAdminById = async (req, res) => {
  const admin = await ContactAdmin.findAll({
    where: {
        id: req.params.id
    }
});
  res.json({ admin });
};

const editAdmin = async (req, res) => {
const admin = await ContactAdmin.update(req.body, {
    where: {
        id: req.params.id
    }
});
  res.json({ admin });
    };

module.exports = {getAdmins, getAdminById, editAdmin } ;



