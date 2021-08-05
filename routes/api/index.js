// express Route module
const express = require("express");

// Route
const Route = express.Router();

// controllers
const controllers = require("../../controllers");

// Routes
// @desc all http methods ( REST API )
// @access Pubic

Route.post("/addPost", controllers.user.CreatController.CreatUser);
Route.get("/getUsers", controllers.user.getController.getUsers);
Route.put("/updateUser/:id", controllers.user.updateController.updataUser);
Route.delete("/deleteUser/:id", controllers.user.deleteController.deleteUser);

module.exports = Route;
