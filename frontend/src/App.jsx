import React from 'react';
import EmojiShortcutForm from './components/EmojiShortcutForm';
import EmojiShortcutList from './components/EmojiShortcutList';

const App = () => {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Emoji Shortcut Manager</h1>
      <div className='flex gap-5'>
      <EmojiShortcutForm />
      <EmojiShortcutList />

      </div>
    </div>
  );
};

export default App;
