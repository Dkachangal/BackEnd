const express = require('express');
const noteModel = require('./models/note.model');

const app = express();

app.use(express.json());

// CREATE A NOTE IN THE DATABASE
app.post('/notes/create', async (req, res) => {
    const data = req.body;

    try {
        await noteModel.create({
            t: data.title,
            d: data.description
        });
        res.status(200).send("Note created successfully");
    } catch (err) {
        console.log("Could not create the note");
        res.status(500).send("Could not create the note");
    }
})

// VIEWING ALL THE NOTES IN THE DB
app.get('/notes/viewall', async (req, res) => {
    try {
        const data = await noteModel.find(); // returns an array of objects
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send("Could not fetch the notes");
    }
})

// UPDATING A NOTE IN THE DB
app.patch('/notes/update/:id', async (req, res) => {
    const idx = req.params.id;
    const data = req.body;

    try {
        await noteModel.findOneAndUpdate({_id: idx}, {d: data.description});
        res.status(200).send("Note updated successfully");
    } catch (err) {
        res.status(500).send("Could not update the note!!");
    }
})

// UPDATE BY TITLE
app.patch('/notes/updateByTitle/:title', async (req, res) => {
    const title = req.params.title;
    const newDesc = req.body.description;
    try {
        await noteModel.updateMany({t: title}, {d: newDesc});
        res.status(200).send("Note updated successfully");
    } catch (err) {
        res.status(500).send("Could not update the note");
    }
})
module.exports = app;