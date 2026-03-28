const express = require('express');
const homePage = express.Router();
const path = require('path');
const {addHome, nameArray} = require('./addHomeRouter.js');

homePage.get("/", (req, res, next) => {
    // res.sendFile(path.join(__dirname, 'views', 'homePage.html'));
    res.render('homePage', {nameArray});
});

module.exports = homePage;
