
const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');



// All routes here will start with /api/notes

// POST /api/users 
router.post('/', notesCtrl.create);

router.get('/', notesCtrl.index);

module.exports = router;

