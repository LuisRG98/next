'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

interface Todo {
  id: number;
  title: string;
  description: string;
  status: boolean;
}

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const router = useRouter();

  const handleDelete = async () => {
    const res = await fetch('/api/todos', {
      method: 'DELETE',
      body: JSON.stringify({ id: todo.id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      router.refresh(); // Recargar la página para actualizar la lista de todos
    }
  };

  const handleToggleStatus = async () => {
    const res = await fetch('/api/todos', {
      method: 'PUT',
      body: JSON.stringify({ id: todo.id, status: !todo.status }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      router.refresh(); // Recargar la página para actualizar la lista de todos
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-900">{todo.title}</h2>
      <p className="text-gray-700">{todo.description}</p>
      <p className="text-sm text-gray-500">Status: {todo.status ? 'Complete' : 'Incomplete'}</p>
      <div className="mt-4 flex space-x-2">
        <button onClick={handleToggleStatus} className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none">
          {todo.status ? 'Mark as Incomplete' : 'Mark as Complete'}
        </button>
        <button onClick={handleDelete} className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none">
          Delete
        </button>
      </div>
    </div>
  );
}
