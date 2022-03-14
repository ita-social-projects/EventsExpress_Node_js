const express = require("express");
const { test } = require("./testCtrl");
const { modelSchema } = require("./testModel");
const container = require("../../middlewares/container");
const router = express.Router();
const validator = require("express-joi-validation").createValidator({});

router.post("/", validator.body(modelSchema), container(test));

module.exports = router;
