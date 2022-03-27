const container = (ctrl) => async (req, res, next) => {
  try {
    console.log(1);
    await ctrl(req, res);
    console.log(2);
  } catch (error) {
    next(error);
  }
};

module.exports = container;
