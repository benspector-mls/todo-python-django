import React from 'react';
import type { Todo } from '../App';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number, isComplete: boolean) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <li className="flex items-center justify-between bg-white p-3 rounded shadow">
      <span
        className={
          'flex-1 cursor-pointer ' +
          (todo.isComplete ? 'line-through text-gray-400' : '')
        }
        onClick={() => onToggle(todo.id, todo.isComplete)}
      >
        {todo.description}
      </span>
      <button
        className={
          'ml-4 px-3 py-1 rounded ' +
          (todo.isComplete
            ? 'bg-yellow-400 text-white hover:bg-yellow-500'
            : 'bg-green-500 text-white hover:bg-green-600')
        }
        onClick={() => onToggle(todo.id, todo.isComplete)}
      >
        {todo.isComplete ? 'Undo' : 'Complete'}
      </button>
      <button
        className="ml-2 px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600"
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem; 