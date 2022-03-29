const express = require("express");
const container = require("../middlewares/container");
const { getUsers, getUserById,  editUsername, /* addUser,, deleteUser */ } = require("../controllers/users");

const router = express.Router();
router.get('/', container(getUsers))
router.get('/GetUserProfileById/:id', container(getUserById));
router.patch('/EditUsername/:id', container(editUsername));

module.exports = router;