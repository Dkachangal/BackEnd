const express = require('express');
const addHome = express.Router();
const parseBody = require('body-parser');
const path = require('path');
const bodyParser = require('body-parser');

addHome.get("/add-home", (req, res, next) => {

    res.sendFile(path.join(__dirname, 'views', 'FormPageGET.html'));
});

addHome.post("/add-home", (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'FormPagePOST.html'));
    bodyParser.urlencoded();
    console.log(req.body);
});

module.exports = addHome;