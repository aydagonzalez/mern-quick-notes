
const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');

// All routes here will start with /api/notes

// POST /api/notes 
router.post('/', notesCtrl.create);

router.get('/', notesCtrl.index);

// DELETE	/posts/:id
router.delete('/:id', notesCtrl.delete);

module.exports = router;

