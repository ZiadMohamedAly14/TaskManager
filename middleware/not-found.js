const notFound = (req, res) => res.status(404).send("Unknown Route");

module.exports = notFound;
