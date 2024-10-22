import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmojiShortcutList = () => {
  const [shortcuts, setShortcuts] = useState([]);
  const userId = 'your_user_id'; // Replace with actual user ID logic

  useEffect(() => {
    const fetchShortcuts = async () => {
      const res = await axios.get(`http://localhost:5000/api/shortcuts/${userId}`);
      setShortcuts(res.data);
    };

    fetchShortcuts();
  }, []);

  return (
    <ul className="space-y-2">
     
      {shortcuts.map(shortcut => (
        <li key={shortcut._id} className="border p-2">
          {shortcut.shortcut} → {shortcut.emoji}
        </li>
      ))}
    </ul>
  );
};

export default EmojiShortcutList;
