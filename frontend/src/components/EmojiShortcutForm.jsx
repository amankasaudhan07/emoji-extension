import React, { useState } from 'react';
import axios from 'axios';

const EmojiShortcutForm = () => {
  const [emoji, setEmoji] = useState('');
  const [shortcut, setShortcut] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = 'your_user_id'; // Replace with actual user ID logic
    await axios.post('http://localhost:5000/api/shortcuts', { userId, emoji, shortcut });
    setEmoji('');
    setShortcut('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
      <input
        type="text"
        placeholder="Emoji"
        value={emoji}
        onChange={(e) => setEmoji(e.target.value)}
        required
        className="border border-gray-300 p-2"
      />
      <input
        type="text"
        placeholder="Shortcut"
        value={shortcut}
        onChange={(e) => setShortcut(e.target.value)}
        required
        className="border border-gray-300 p-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Save Shortcut</button>
    </form>
  );
};

export default EmojiShortcutForm;
