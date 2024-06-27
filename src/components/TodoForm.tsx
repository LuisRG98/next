'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import '@/styles/inputStyles.css'; // Importar las clases de estilo

export default function TodoForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const res = await fetch('/api/todos', {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      setTitle('');
      setDescription('');
      router.refresh(); // Recargar la página para actualizar la lista de todos
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 form-container">
      <div>
        <label htmlFor="title" className="input-label">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input"
        />
      </div>
      <div>
        <label htmlFor="description" className="input-label">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input"
        />
      </div>
      <button type="submit" className="button">
        Add Todo
      </button>
    </form>
  );
}
