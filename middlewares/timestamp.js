function timestampGenerator(req, res, next) {
  const timestamp = new Date();
  req.timestamp = timestamp.toString();
  next();
}

module.exports = {
  timestampGenerator
}