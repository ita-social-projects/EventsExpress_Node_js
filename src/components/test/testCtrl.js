const { Test } = require("./testModel");

const test = async (req, res) => {
  const result = await Test.create(req.body);

  res.status(201).json({ result });
};

module.exports = { test };
