// External Module
const express = require('express');
const path = require('path');

// Local Module
const purchasePage = require('./purchasePage.js');
const homePageRouter = require('./home.js');
const contact_page = require('./contact-us.js');
const addHome = require('./addHomeRouter.js');
const Router404 = require('./404JS.js');

const bodyParser = require('body-parser');
const port = 3002;
const app = express();



// app.use((req, res, next) => {
//     console.log(req.url);

//     next();
// });

app.use(bodyParser.urlencoded());

// show home to user
app.use(homePageRouter);

// show contact us page to user
app.use(contact_page);

// add home GET AND POST BOTH
app.use(addHome);

// purchase Page Router
app.use("/host", purchasePage);

// 404 - if any of above deosnt match
app.use(Router404);
// app listener
app.listen(port, ()=> {
    console.log(`http://localhost:${port}`);
});