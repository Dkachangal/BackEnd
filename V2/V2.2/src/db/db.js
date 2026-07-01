const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect('mongodb+srv://dk:divyansh@learningmongodb.0sqhc9h.mongodb.net/v22');
        console.log("connected to mongodb");
    } catch (err) {
        console.log("Error. Could not connect to mongodb");
    }
}

module.exports = connectDB;
