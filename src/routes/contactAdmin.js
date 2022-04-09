const express = require("express");
const { getAdmins, getAdminById, editAdmin, addContactAdmin, deleteContactAdmin } = require("../controllers/contactAdmin");
const container = require("../middlewares/container")
 
const router = express.Router();
 
router.get('/All', container(getAdmins));
router.get('/:messageId', container(getAdminById));
router.patch('/:messageId/UpdateStatus', container(editAdmin));
router.post('/AddContactAdmin', container(addContactAdmin));
router.delete('/DeleteContactAdmin/:id', container(deleteContactAdmin));

module.exports = router;
