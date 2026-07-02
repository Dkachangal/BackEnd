const express = require('express');
const connectDB = require('./db/db');
const userModel = require('./models/user.model');


const app = express();
app.use(express.json());
connectDB();

module.exports = app;