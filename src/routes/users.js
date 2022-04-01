const express = require("express");
const container = require("../middlewares/container");
const { getUsers, getUserById,  editUsername, addUser, deleteUser  } = require("../controllers/users");

const router = express.Router();
router.get('/', container(getUsers))
router.get('/GetUserProfileById/:id', container(getUserById));
router.post('/AddUser', addUser);
router.patch('/EditUsername/:id', container(editUsername));
router.delete('/DeleteUser/:id', container(deleteUser));

module.exports = router;