import React from 'react';

interface Todo {
  id: number;
  title: string;
  description: string;
  status: boolean;
}

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const handleDelete = async () => {
    await fetch(`/api/todos`, {
      method: 'DELETE',
      body: JSON.stringify({ id: todo.id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // Refetch or update the todo list here
  };

  const handleToggleStatus = async () => {
    await fetch(`/api/todos`, {
      method: 'PUT',
      body: JSON.stringify({ id: todo.id, status: !todo.status }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // Refetch or update the todo list here
  };

  return (
    <div>
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
      <p>Status: {todo.status ? 'Complete' : 'Incomplete'}</p>
      <button onClick={handleToggleStatus}>
        {todo.status ? 'Mark as Incomplete' : 'Mark as Complete'}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
