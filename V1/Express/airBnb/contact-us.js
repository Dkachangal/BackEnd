const express = require('express');
const contactPageRouter = express.Router();
const path = require('path');

contactPageRouter.get("/contact-us", (req, res, next) => {
        res.sendFile(path.join(__dirname, 'views', 'contactUs.html'));
});

module.exports = contactPageRouter;