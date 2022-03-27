const express = require("express");
const getAllContactAdmins = require("../controllers/ContactAdmin.js");
const container = require("../middlewares/container")
 
const router = express.Router();
 
router.get('/', container(getAllContactAdmins));

module.exports = router;
