'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import '@/styles/inputStyles.css'; // Importar las clases de estilo

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
      router.refresh(); 
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
      router.refresh(); 
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold">{todo.title}</h2>
      <p className="text-gray-600">{todo.description}</p>
      <p className="text-sm text-gray-500">Status: {todo.status ? 'Complete' : 'Incomplete'}</p>
      <div className="mt-2 flex space-x-2">
        <button onClick={handleToggleStatus} className="button">
          {todo.status ? 'Mark as Incomplete' : 'Mark as Complete'}
        </button>
        <button onClick={handleDelete} className="button bg-red-500 hover:bg-red-700">
          Delete
        </button>
      </div>
    </div>
  );
}
