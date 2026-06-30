const express = require('express');
const purchasePageRouter = express.Router();
const path = require('path');

purchasePageRouter.use('/purchasePage', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'purchase.html'));
});

module.exports = purchasePageRouter;