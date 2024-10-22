const EmojiShortcut = require('../models/EmojiShortcut');

exports.addShortcut = async (req, res) => {
  const { userId, emoji, shortcut } = req.body;
  const newShortcut = new EmojiShortcut({ userId, emoji, shortcut });
  await newShortcut.save();
  res.status(201).json(newShortcut);
};

exports.getShortcuts = async (req, res) => {
  const { userId } = req.params;
  const shortcuts = await EmojiShortcut.find({ userId });
  res.status(200).json(shortcuts);
};
