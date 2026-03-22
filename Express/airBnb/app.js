const express = require('express');
const port = 3002;
const app = express();

// show home to user
app.get("/", (req, res, next) => {
    res.send(`<h1> hello world</h1>
            <h3><a href = "/contact-us">Contact Us</a></h3>
            <h3><a href = "/add-home"> Add Home</a></h3>
        `);
    next();
});

// show contact us page to user
app.get("/contact-us", (req, res, next) => {
    res.send(`<h1>This is the contact us page</h1>
        <h3> <a href = "/"> home</a></h3>
        `);
});

// show form to user
app.get("/add-home", (req, res, next) => {
    res.send(`<h1>Register Your home here</h1>
            <form method="post" action="/add-home">
        <input type="text" name="home" placeholder="Enter home name">
        <input type="submit" name="submit">
    </form>
        `);
});

// show form result to user
app.post("/add-home", (req, res, next) => {
    res.send(`<h1> Home has been added Successfully</h1>
            <h3> <a href = "/"> Home</a></h3>
        `);
});


// app listener
app.listen(port, ()=> {
    console.log(`http://localhost:${port}`);
});