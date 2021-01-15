const express = require("express");
const app = express();

const websiteController = require("../../controllers/website/website.controller");

app.get("/get-site/:id", websiteController.getTemplate);

//for edit
app.get("/edit/:id/:template", websiteController.getEditTemplate);

//for edit form
app.get("/editform/:id/:template", websiteController.getEditTemplate);

app.get("/get-template-name/:id", websiteController.getTemplateName);

app.delete("/delete-site/:id/:template/:userID", websiteController.deleteTemplate);

app.post("/save-site/template1/:edit", websiteController.postTemplate1);

app.post("/save-site/template2/:edit", websiteController.postTemplate2);

app.post("/save-site/template3/:edit", websiteController.postTemplate3);

module.exports = app;