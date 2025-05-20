import React from 'react';
import type { Todo } from '../App';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number, isComplete: boolean) => void;
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
  if (todos.length === 0) {
    return <div className="text-gray-500">No todos yet!</div>;
  }
  return (
    <ul className="w-full max-w-xl space-y-2">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default TodoList; 