const express = require('express');
const purchasePageRouter = express.Router();

purchasePageRouter.use('/purchasePage', (req, res, next) => {
    res.send(`<h1>This is the Purchase Page</h1>
            <h3><a href = "/">Back to Home</a>
        `);
    next();
});

module.exports = purchasePageRouter;