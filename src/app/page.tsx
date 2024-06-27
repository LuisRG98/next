import { prisma } from '@/lib/prisma';
import TodoForm from '@/components/TodoForm';
import TodoList from '@/components/TodoList';
import '@/styles/globals.css';


export const dynamic = 'force-dynamic';

async function getTodos() {
  const todos = await prisma.todo.findMany();
  return todos;
}

export default async function TodosPage() {
  const todos = await getTodos();

  return (
    <div>
      <TodoForm />
      <TodoList todos={todos} />
    </div>
  );
}
