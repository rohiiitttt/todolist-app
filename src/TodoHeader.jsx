import React from 'react';

function TodoHeader() {
  return (
    <header className="p-4 mb-2 text-white bg-blue-600 rounded-t-lg shadow-md">
      <div className="container flex items-center justify-between mx-auto">
        <h1 className="text-3xl font-bold">Todo List</h1>
        <p className="text-lg">Keep track of your tasks and get things done!</p>
      </div>
    </header>
  );
}

export default TodoHeader;
