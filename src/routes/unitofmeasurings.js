const express = require('express');
const container = require('../middlewares/container')
const {
  addUnitOfMeasurings,
  editUnitOfMeasurings,
  deleteUnitOfMeasurings,
  getAllUnitOfMeasurings,
  getUnitOfMeasuringsById,
} = require('../controllers/unitofmeasurings.js');

const router = express.Router();

router.post('/Create', container(addUnitOfMeasurings));
router.patch('/Edit/:id', container(editUnitOfMeasurings));
router.delete('/Delete/:id', container(deleteUnitOfMeasurings));
router.get('/All', container(getAllUnitOfMeasurings));
router.get('/GetById/:id', container(getUnitOfMeasuringsById));

module.exports = router;
