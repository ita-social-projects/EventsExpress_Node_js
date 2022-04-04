const express = require("express");
const container = require("../middlewares/container");
const { blockAccount, unblockAccount } = require("../controllers/account");
const validator = require("express-joi-validation").createValidator({});
const Joi = require("joi");

const schemaBlockAndUnBlock = Joi.object({
  userId: Joi.string().required(),
});

const router = express.Router();

router.post(
  "/Block",
  validator.params(schemaBlockAndUnBlock),
  container(blockAccount)
);
router.post(
  "/Unblock",
  validator.params(schemaBlockAndUnBlock),
  container(unblockAccount)
);

module.exports = router;
