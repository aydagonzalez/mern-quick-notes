// const jwt = require('jsonwebtoken')
const Note = require('../../models/note')
const User = require('../../models/user')
// const bcrypt = require('bcrypt');

module.exports = {
    createNote
};


async function createNote(req, res) {
    try {
        const user = await User.findById(req.user._id)
        // const user = await User.findOne({ email: req.body.email });
        const note = await Note.create(req.body)

        note.text = req.body.text
        note.save()
        user.notes.push(note)
        user.save()
        // // Add the user to the database
        // const user = await User.create(req.body);
        // // token will be a string
        // const token = createJWT(user);
        // // Yes, we can use res.json to send back just a string
        // // The client code needs to take this into consideration
        // res.json(token);
    } catch (err) {
        // Client will check for non-2xx status code 
        // 400 = Bad Request
        res.status(400).json(err);
    }
}
