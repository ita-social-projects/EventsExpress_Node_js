const express = require("express");
const { test } = require("../controllers/test");
const { validationBody } = require("../middlewares/validation");
const { schemaCreate } = require("../models/test");
const container = require("../middlewares/container");
const router = express.Router();

router.post("/", validationBody(schemaCreate), container(test));

module.exports = router;
