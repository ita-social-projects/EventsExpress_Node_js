const express = require("express");
const { getAdmins, getAdminById, editAdmin } = require("../controllers/contactadmin");
const container = require("../middlewares/container")
 
const router = express.Router();
 
router.get('/All', container(getAdmins));
router.get('/:messageID', container(getAdminById));
router.patch('/:messageID/UpdateStatus', container(editAdmin));

module.exports = router;
