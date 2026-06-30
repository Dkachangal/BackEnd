const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3002;

// middleWare 1
app.use((req, res, next) => {
    console.log(req.path);
    console.log(req.method);
    next();
});

// middleWare 2
app.use((req, res, next) => {
    console.log(req.url);
    console.log(req.method);
    next();
});

// middleWare 3
app.use((req, res, next) => {
    // res.send('<h1>This is the response</h1>');
    next();
});

// middleWare 4
app.use("/", (req, res, next) => {
    console.log("This is the / path");
    next();
});

// middleWare 5
app.get("/contact-us", (req, res, next) => {
    res.send('<form method="post"><input type="text" name="name" placeholder="name"><input type="text" name="email" placeholder="email"><input type = "submit"></input></form>');
    console.log("This is the /contact-us path");
});

app.use(bodyParser.urlencoded());

app.post("/contact-us", (req, res, next) => {
    res.send('<h1>Submitted</h1>');
    console.log(req.body);
    console.log("Submitted Button Clicked!");
});

app.listen(port, ()=> {
    console.log(`http://localhost:${port}`);
})