// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt');
const Note = require('../../models/note')
const User = require('../../models/user')

module.exports = {
    create,
    index,
    delete: deleteNote,
    update,
    edit
};


async function create(req, res) {
    try {
        const user = await User.findById(req.user._id).populate('notes')
        // const user = await User.findOne({ email: req.body.email });
        const note = await Note.create(req.body)
        // console.log(req.body)
        note.text = req.body.text
        note.save()
        user.notes.push(note)
        user.save()
    } catch (err) {
        // Client will check for non-2xx status code 
        res.status(400).json(err);
    }
}


async function index(req, res) {
    try {
        const user = await User.findById(req.user).populate('notes')
        // console.log("INDEX-USER:", user)
        // const note = await Note.find({})
        // const userNotes = user.notes
        // console.log("NOTE:", notes)
        res.json(user.notes)
        // console.log("NOTE:", note)
    } catch (err) {
        // Client will check for non-2xx status code 
        res.status(400).json(err);
    }
}


async function deleteNote(req, res) {
    try {
        const user = await User.findById(req.user._id)
        // console.log("PARAMS-ID:",req.params.id )
        const note = await Note.findOne({ '_id': req.params.id})
        // console.log("DELETE-NOTE:", note)
        if (!note) {
            return res.status(404).json({ err: "Note not found" });
        }
        
        await note.deleteOne({ '_id': req.params.id });
        // const note = await Note.find({})
        // const userNotes = user.notes
        // console.log("NOTE:", notes)
        res.json(user.notes)
        // console.log("NOTE:", note)
    } catch (err) {
        // Client will check for non-2xx status code 
        res.status(400).json(err);
    }
}

async function edit(req, res) {
    const user = await User.findById(req.user._id)
    const note = await Note.findOne({ '_id': req.params.id})
    if (!note) {
        return res.status(404).send("Note not found.");
    }
    res.json(user.notes)
  }

async function update(req, res) {
    console.log("ID:", req.params.id, "Body:", req.body.text);
    try {
        const user = await User.findById(req.user._id)
        const note = await Note.findOne({ '_id': req.params.id})
        console.log("FOUND NOTE LOG:", note);
        if (!note) {
            return res.status(404).send("Note not found.");
        }
        console.log("FOUND NOTE TEXT LOG:", note.text);
        note.text = req.body.text;
        await note.save();
        res.json(user.notes)
    } catch (err) {
        console.error(err);
        res.status(500).send("An error occurred.");
    }
  }
