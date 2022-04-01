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
        messageID: req.params.messageID
    }
});
  res.json(admin);
};

const editAdmin = async (req, res) => {
    console.log(req.body);
   await ContactAdmin.update({status: req.query.status}, {
    where: {
        messageID: req.params.messageID
    }
});
  res.json({ message: 'Status edited' });
    };

module.exports = {getAdmins, getAdminById, editAdmin } ;



