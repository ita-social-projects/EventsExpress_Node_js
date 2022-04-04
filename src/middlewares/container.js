const container = (ctrl) => async (req, res, next) => {
  try {
    await ctrl(req, res);
  } catch (error) {
	res.json({ message: error.message });
  }
};

module.exports = container;
