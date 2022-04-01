const createAdminModel = require("../models/contactAdmin");
const { db } = require("../databaseSetup");
const { DataTypes } = require("sequelize");

const ContactAdmin = createAdminModel(db, DataTypes);

const getAdmins = async (req, res) => {
  const admins = await ContactAdmin.findAll();
  res.json(admins);
};

const getAdminById = async (req, res) => {
  const admin = await ContactAdmin.findOne({
    where: {
      messageId: req.params.messageId,
    },
  });
  console.log(admin);
  if (!admin) {
    return res.status(404).json( {message: "Not found id"}) ;
  }
  res.json(admin);
};

const editAdmin = async (req, res) => {
  await ContactAdmin.update(
    { status: req.query.status },
    {
      where: {
        messageId: req.params.messageId,
      },
    }
  );
  res.json({ message: "Status edited" });
};

module.exports = { getAdmins, getAdminById, editAdmin };
