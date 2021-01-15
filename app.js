const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

//PORT
const port = process.env.PORT || 8000;

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));
app.use(cors());

//Requiring Routes
const indexRoutes = require("./routes/index");

app.use(indexRoutes);

//Database Connection
const MongoDBURI = `mongodb://localhost:27017/advertME`;
mongoose.connect(MongoDBURI)
    .then(() => {
        console.log("Connected to db");
        app.listen(port, function() {
            console.log("Server Started at " + port);
        });
    })
    .catch(err => {
        console.log("Errorrrr!!", err.message);
    });