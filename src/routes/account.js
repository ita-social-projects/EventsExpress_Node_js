const express = require('express');
const container = require('../middlewares/container');
const { blockAccount, unblockAccount } = require('../controllers/account');
const validator = require('express-joi-validation').createValidator({});
const Joi = require('joi');

const schemaBlockAndUnBlock = Joi.object({
  userId: Joi.number().required(),
});

const router = express.Router();

router.patch(
  '/:userId/block',
  validator.params(schemaBlockAndUnBlock),
  container(blockAccount)
);
router.patch(
  '/:userId/unblock',
  validator.params(schemaBlockAndUnBlock),
  container(unblockAccount)
);

module.exports = router;
