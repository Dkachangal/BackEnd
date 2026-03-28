const express = require('express');
const addHome = express.Router();
const parseBody = require('body-parser');
const path = require('path');
const bodyParser = require('body-parser');
const { builtinModules } = require('module');

addHome.get("/add-home", (req, res, next) => {

    // res.sendFile(path.join(__dirname, 'views', 'FormPageGET.ejs'));
    res.render('FormPageGet', {pageName: 'INPUT DETAILS'});
});

const nameArray = [];

addHome.use((req, res, next) => {
    bodyParser.urlencoded();
    next();
});

addHome.post("/add-home", (req, res, next) => {
    // res.sendFile(path.join(__dirname, 'views', 'FormPagePOST.html'));
    res.render('FormPagePOST', {pageName: 'FORM SUBMITTED SUCCESSFULLY'});
    

    // console.log("Home registered for : ", req.body.home);
    nameArray.push(req.body.home);
    console.log(nameArray);
});

exports.addHome = addHome;
exports.nameArray = nameArray;