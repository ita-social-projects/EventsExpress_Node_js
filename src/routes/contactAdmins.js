const express = require("express");
const { getAdmins, getAdminById, editAdmin } = require("../controllers/ContactAdmin");
const container = require("../middlewares/container")
 
const router = express.Router();
 
router.get('/All', container(getAdmins));
router.get('/GetAdminById/:id', container(getAdminById));
router.patch('/EditAdmin/:id', container(editAdmin));

module.exports = router;
