const express = require('express');
const port = 3002;

const app = express();

app.use("/", (req, res, next) => {
    console.log(`http://localhost:3002`);
    console.log(req.url);
    console.log("First middle ware is running");
    // res.send("SlashPage")
    next();
});
app.use("/hi", (req, res, next) => {
    console.log("Second middle ware is running");
    // res.send('<h1 style="color: rgb(5, 3, 64); text-decoration: dashed;">/HI-Page</h1>');
    next();
});

app.use("/systummm", (req, res, next) => {
    console.log(res.url);
    res.send('<h1 style="color: rgb(5, 3, 64); text-decoration: dashed;">/Systumm page</h1>');
    next();
})

app.listen(port, ()=> {
    console.log(`http://localhost:${port}`);
})