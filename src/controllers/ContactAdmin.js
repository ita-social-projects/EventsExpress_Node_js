const createAdminModel = require("../models/contactadmin");
const { db } = require("../databaseSetup");
const { DataTypes } = require("sequelize");

const ContactAdmin = createAdminModel(db, DataTypes);

const getAdmins = async (req, res) => {
  const admins = await ContactAdmin.findAll();
  res.json(admins);
};

const getAdminById = async (req, res) => {
  const admin = await ContactAdmin.findAll({
    where: {
        messageId: req.params.id
    }
});
  res.json(admin);
};

const editAdmin = async (req, res) => {
   await ContactAdmin.update(req.status, {
    where: {
      messageId: req.params.id
    }
});
  res.json({ message: 'Status edited' });
    };

module.exports = {getAdmins, getAdminById, editAdmin } ;



