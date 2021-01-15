const express = require("express");
const app = express();

const authController = require("../../controllers/auth/auth");

//POST create new page
app.post("/register", authController.register);

//POST update page
app.post("/login", authController.login);


module.exports = app;