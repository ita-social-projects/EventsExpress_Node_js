const container = (ctrl) => async (req, res, next) => {
  try {
    await ctrl(req, res);
  } catch (error) {
	res.json({ message: error.message });  
  // res.header("Access-Control-Allow-Origin", "localhost:4200");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  }
};

module.exports = container;
