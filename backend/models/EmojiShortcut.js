const mongoose = require('mongoose');

const emojiShortcutSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  emoji: { type: String, required: true },
  shortcut: { type: String, required: true },
});

module.exports = mongoose.model('EmojiShortcut', emojiShortcutSchema);
