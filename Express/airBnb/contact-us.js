const express = require('express');
const contactPageRouter = express.Router();

contactPageRouter.get("/contact-us", (req, res, next) => {
    res.send(`<h1>This is the contact us page</h1>
                <h3> <a href = "/"> home</a></h3>
        `);
});

module.exports = contactPageRouter;