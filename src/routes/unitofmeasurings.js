const express = require('express');
const {
  addUnitOfMeasurings,
  editUnitOfMeasurings,
  deleteUnitOfMeasurings,
  getAllUnitOfMeasurings,
  getUnitOfMeasuringsById,
} = require('../controllers/unitofmeasurings.js');

const router = express.Router();

router.post('/Create', addUnitOfMeasurings);
router.patch('/Edit/:id', editUnitOfMeasurings);
router.delete('/Delete/:id', deleteUnitOfMeasurings);
router.get('/All', getAllUnitOfMeasurings);
router.get('/GetById/:id', getUnitOfMeasuringsById);

module.exports = router;
