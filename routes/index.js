const Route = require("express").Router();

Route.use("/api", require("./api"));

module.exports = Route;
