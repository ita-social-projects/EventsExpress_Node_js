
 const express = require('express');
  
 const {getAllEvents} = require ("../controllers/event.js");

const router = express.Router();
 
router.get('/', getAllEvents);


 
module.exports = router;