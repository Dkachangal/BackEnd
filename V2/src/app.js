const express = require('express');

const app = express();

app.use(express.json());

const notes = [];

// API TO CREATE A NOTE
app.post('/notes/create', (req, res) => {
    console.log("Note created 🎉🎉🦒");
    notes.push(req.body);
    res.status(201).send("Note Created 🎉");
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