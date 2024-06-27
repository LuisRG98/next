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
    <div className="mt-8 px-20">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">ToDo List</h1>
      <div className="space-y-4">
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}
