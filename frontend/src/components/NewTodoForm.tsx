import React, { useState } from 'react';

interface NewTodoFormProps {
  onAdd: (description: string) => void;
}

const NewTodoForm: React.FC<NewTodoFormProps> = ({ onAdd }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (description.trim()) {
      onAdd(description);
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        className="border rounded px-3 py-2 w-64"
        placeholder="Add a new todo..."
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add
      </button>
    </form>
  );
};

export default NewTodoForm; 