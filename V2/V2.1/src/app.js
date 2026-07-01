const express = require('express');
const app = express();
const noteModel = require('./models/note.model');

app.use(express.json());

const notes = [];

// API TO CREATE A NOTE
app.post('/notes/create', async (req, res) => {
    const data = req.body;
    try {
        await noteModel.create({
            title: data.title,
            desc: data.desc
        });
        res.status(201).send("Note Created 🎉");
    }
    catch (err) {
        console.log("Error while creatingn a note");
        res.status(500).send("Error while creating a note");
    }
});

// API TO GET ALL NOTES
app.get('/notes/viewall', (req, res) => {

    res.status(200).json(notes);
});

// DELETE A SPECIFIC NOTE
app.delete('/notes/delete/:idx', (req, res) => {
    const i = req.params.idx;
    delete notes[i];
    console.log("Note Deleted 🗑️");
    res.status(200).send("Note Deleted 🗑️");
});

// UPDATE A SPECIFIC NOTE
app.patch('/notes/update/:id', (req, res) => {
    const i = req.params.id;

    const newDesc = req.body.newDesc;

    notes[i].desc = newDesc;
    res.status(200).send('Note updated successfully');
});

module.exports = app;