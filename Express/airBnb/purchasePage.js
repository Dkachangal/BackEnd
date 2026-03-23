const express = require('express');
const purchasePageRouter = express.Router();
const path = require('path');

purchasePageRouter.use('/purchasePage', (req, res, next) => {
    // res.send(`<h1>This is the Purchase Page</h1>
    //         <h3><a href = "/">Back to Home</a>
    //     `);
    // next();
    res.sendFile(path.join(__dirname, 'views', 'purchase.html'));
});

module.exports = purchasePageRouter;