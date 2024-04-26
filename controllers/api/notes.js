// const jwt = require('jsonwebtoken')
const Note = require('../../models/note')
const User = require('../../models/user')
// const bcrypt = require('bcrypt');

module.exports = {
    create,
    index
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
        const note = await Note.find({})
        // console.log("NOTE:", note)
        res.json(note)
        console.log("NOTE:", note)
    } catch (err) {
        // Client will check for non-2xx status code 
        res.status(400).json(err);
    }
}
