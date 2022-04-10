const express = require("express");
const container = require("../middlewares/container");
const getAllCategoriesOfMeasurings = require("../controllers/categoryOfMeasuring");

const router = express.Router();

router.get("/GetAll", container(getAllCategoriesOfMeasurings));

module.exports = router;
