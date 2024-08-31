import React, { useState, useEffect } from 'react';
import TodoHeader from './TodoHeader';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (text) => {
    if (text) {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false,
        date: new Date().toLocaleDateString(), // Add date
      };
      setTodos([...todos, newTodo]);
    }
  };

  const handleToggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleRemoveTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const completedTodos = todos.filter(todo => todo.completed);
  const activeTodos = todos.filter(todo => !todo.completed);

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="max-w-2xl p-6 mx-auto bg-white rounded-lg shadow-lg">
        <TodoHeader />
        <TodoInput onAddTodo={handleAddTodo} />
        <div className="mt-6">
          <h2 className="mb-4 text-2xl font-semibold">Tasks</h2>
          {activeTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggleComplete={handleToggleComplete}
              onRemove={handleRemoveTodo}
            />
          ))}
        </div>
        {completedTodos.length > 0 && (
          <div className="mt-6">
            <h2 className="mb-4 text-2xl font-semibold">Things Done</h2>
            {completedTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggleComplete={handleToggleComplete}
                onRemove={handleRemoveTodo}
                completed
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
