const express = require("express");
const app = express();

const websiteRoute = require("./website/website.routes");
const authRoute = require("./auth/auth.routes");
const userRoute = require("./user/user.routes");

app.use("/website", websiteRoute);
app.use("/auth", authRoute);
app.use("/user", userRoute);

app.use((error, req, res, next) => {
    console.log(error);
    res.redirect("/500");
});

app.get("/500", (req, res, next) => {
    res.send("500");
});

app.use((req, res, next) => {
    res.send("404");
});

module.exports = app;