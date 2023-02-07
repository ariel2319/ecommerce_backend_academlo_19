const error = (error, req, res, next) => {
  res.status(400).json(error.message);
}

module.exports = error;