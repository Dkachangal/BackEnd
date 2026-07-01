require('node:dns/promises').setServers(['1.1.1.1', '8.8.8.8']);
const express = require('express');
const app = require('./src/app');
const connectDB = require('./src/db/db');

connectDB();
app.listen(3001);