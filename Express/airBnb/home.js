const express = require('express');
const homePage = express.Router();

homePage.get("/", (req, res, next) => {
     res.send(`<h1> hello world</h1>
        <h3><a href = "/contact-us">Contact Us</a></h3>
        <h3><a href = "/add-home"> Add Home</a></h3>
            <h3><a href = "/host/purchasePage"> Purchase Page Router</a></h3>
            `);
});

module.exports = homePage;
