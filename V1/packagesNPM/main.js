const express = require('express');
const app = express();
const PORT = 3002;

const loadNext = (x)=> {
    if (x) {
        next();
    } 
}
app.use((req, res, next) => {
    console.log('MiddleWare1  is running');
    // res.send("from 1st");
    next();

});
app.use((req, res, next) => {
    console.log('nothing after this');
    next();
    res.send('Hello World...This is middleware 2');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});