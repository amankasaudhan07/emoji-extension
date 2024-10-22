const express = require('express');
const { addShortcut, getShortcuts } = require('../controllers/emojiController');

const router = express.Router();

router.post('/shortcuts', addShortcut);
router.get('/shortcuts/:userId', getShortcuts);

module.exports = router;
