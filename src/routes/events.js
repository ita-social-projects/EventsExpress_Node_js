const container = require("../middlewares/container");
 const express = require('express');
  
 const {getAllEvents} = require ("../controllers/event.js");

const router = express.Router();
 
router.get('/', container(getAllEvents));


 
module.exports = router;