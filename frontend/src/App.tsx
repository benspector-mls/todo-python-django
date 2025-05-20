import React, { useEffect, useState } from 'react';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

export interface Todo {
  id: number;
  description: string;
  isComplete: boolean;
  timeCreated: string;
  timeCompleted: string | null;
}

const API_URL = 'http://localhost:8000/api/todos/';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTodos = async () => {
    setLoading(true);
    const res = await fetch(API_URL);
    const data = await res.json();
    setTodos(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (description: string) => {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description }),
    });
    if (res.ok) fetchTodos();
  };

  const toggleTodo = async (id: number, isComplete: boolean) => {
    const res = await fetch(`${API_URL}${id}/`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isComplete: !isComplete }),
    });
    if (res.ok) fetchTodos();
  };

  const deleteTodo = async (id: number) => {
    const res = await fetch(`${API_URL}${id}/`, {
      method: 'DELETE',
    });
    if (res.ok) fetchTodos();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-6">Todo App</h1>
      <NewTodoForm onAdd={addTodo} />
      {loading ? (
        <div className="mt-4">Loading...</div>
      ) : (
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      )}
    </div>
  );
};

export default App; 