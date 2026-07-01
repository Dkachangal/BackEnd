require('node:dns/promises').setServers(['1.1.1.1', '8.8.8.8']);

const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect('mongodb+srv://dk:divyansh@learningmongodb.0sqhc9h.mongodb.net/dkData');
        console.log("Connected to DB Successfully!");
    } catch (err) {
        console.log("Error while connecting to DB");
        console.error(err);
    }
}

module.exports = connectDB;
