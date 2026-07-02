const express = require('express');
const connectDB = require('./db/db');
const userModel = require('./models/user.model');
const authRouter = require('./routes/auth.routes');
const cookieParser = require('cookie-parser');

const app = express();


app.use(express.json());
app.use(cookieParser());
connectDB();

app.use("/api/auth", authRouter);

module.exports = app;