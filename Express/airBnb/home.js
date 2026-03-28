const express = require('express');
const homePage = express.Router();
const path = require('path');
const {nameArray} = require('./addHomeRouter.js');

homePage.get("/", (req, res, next) => {
    // res.sendFile(path.join(__dirname, 'views', 'homePage.html'));
    res.render('homePage', {nameArray: nameArray, pageName: 'HOME PAGE'});
});

module.exports = homePage;
