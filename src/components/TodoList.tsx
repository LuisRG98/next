import React, { useEffect, useState } from 'react';
import TodoItem from './TodoItem';

interface Todo {
  id: number;
  title: string;
  description: string;
  status: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch('/api/todos');
      const data = await response.json();
      setTodos(data);
    };
    fetchTodos();
  }, []);

  return (
    <div>
      <h1>ToDo List</h1>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
