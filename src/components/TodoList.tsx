'use client';

import React from 'react';
import TodoItem from './TodoItem';

interface Todo {
  id: number;
  title: string;
  description: string;
  status: boolean;
}

interface TodoListProps {
  todos: Todo[];
}

export default function TodoList({ todos }: TodoListProps) {
  return (
    <div className="space-y-4 space-x-10">
      <h1 className="text-2xl font-bold space-x-10">ToDo List</h1>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
