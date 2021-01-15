const express = require("express");
const app = express();

const userController = require("../../controllers/user/user.controller");

app.get("/get-site-list/:id", userController.getSiteList);

module.exports = app;