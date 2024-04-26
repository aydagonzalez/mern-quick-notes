// const jwt = require('jsonwebtoken')
const Note = require('../../models/note')
const User = require('../../models/user')
// const bcrypt = require('bcrypt');

module.exports = {
    create,
    index,
    delete: deleteNote
};


async function create(req, res) {
    try {
        const user = await User.findById(req.user._id)
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
        console.log("INDEX-USER:", user)
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
        const note = await Note.findOne({ '_id': req.params.id})
        console.log("DELETE-NOTE:", note)
        if (!note) {
            return res.status(404).json({ error: 'Note not found' });
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

