const express = require('express');
const app = express();
const PORT = 3000;
const parser = require('body-parser');

app.use((req, res, next) => {
    console.log(req.url);
    console.log(req.method);
    next();
});

app.use((req, res, next) => {
    console.log(req.url);
    console.log(req.method);
    next();
});

// app.use((req, res, next) => {
//     res.send('<h1>Welcome to Express</h1>');
// });

// handeling /
app.get("/", (req, res) => {
    res.send(`<h1>Welcome to Express this is / page...</h1>
        <a href="/contact-us">Contact Us</a>
        `);

});

// handeling /contact-us
app.get("/contact-us", (req, res) => {
    res.send(`<h1>Welcome to Express this is contact-us page...</h1>
        <form method="POST" action="/contact-us">
            <input type="text" placeholder="Enter Your Name" name="username">
            <input type="text" placeholder="Enter Email" name="email">
            <input type="submit" value="Submit">
        </form>
        `);
});

app.use(parser.urlencoded());

app.post("/contact-us", (req, res) => {
    res.send('<h1>Form Submitted Successfully...</h1><a href="/">Go Back to Home</a>');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});