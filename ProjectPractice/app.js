const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log(req.url);
    console.log(req.method);
    next();
});

app.use((req, res, next) => {
        console.log(req.url);
    console.log(req.method);
});