const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    t: String,
    d: String
});

const noteModel = mongoose.model('Note', noteSchema);

module.exports = noteModel;