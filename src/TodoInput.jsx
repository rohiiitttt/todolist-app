import React, { useState } from 'react';

function TodoInput({ onAddTodo }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAddTodo(input.trim());  // Ensure `onAddTodo` is called correctly
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-6">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 p-2 border border-gray-300 rounded-l-md"
        placeholder="Add a new task"
      />
      <button
        type="submit"
        className="px-4 py-2 text-white bg-red-400 rounded-r-md hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
}

export default TodoInput;
