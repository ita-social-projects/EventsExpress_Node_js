const createUserModel =  require('../models/users');
const {DataTypes} = require("sequelize");

const { db } = require("../databaseSetup");

const Users = createUserModel(db, DataTypes);

const getUsers = async (req, res) => {
    const users = await Users.findAll();
    res.json(users);
};

const getUserById = async (req, res) => {	
	  const user = await Users.findAll({
		where: {
		  id: req.params.id,
		},
	  });
	  res.json(user[0]);
	
};
const editUsername = async (req, res) => {
	  await Users.update({name: req.query.name}, {
		where: {
		  id: req.params.id,
		},
	  });
	  res.json({
		message: 'User edited',
	  });

};

module.exports = { getUsers, getUserById, editUsername, /* addUser, deleteUser */ }