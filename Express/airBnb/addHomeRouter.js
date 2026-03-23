const express = require('express');
const addHome = express.Router();

addHome.get("/add-home", (req, res, next) => {
    res.send(`<h1>Enter Your Details</h1>
        <form method="post" action="/add-home">
        <input type="text" name="home" placeholder="Enter home name">
        <input type="submit" name="submit">
    </form>`);
});

addHome.post("/add-home", (req, res, next) => {
    res.send(`<h1> Home has been added Successfully</h1>
        <h3> <a href = "/"> Home</a></h3>
        `);
});

module.exports = addHome;