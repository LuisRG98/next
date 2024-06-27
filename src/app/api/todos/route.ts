import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  const data = await request.json();
  const todo = await prisma.todo.create({ data });
  return NextResponse.json(todo);
}

export async function GET() {
  const todos = await prisma.todo.findMany();
  return NextResponse.json(todos);
}

export async function PUT(request: Request) {
  const data = await request.json();
  const todo = await prisma.todo.update({
    where: { id: data.id },
    data,
  });
  return NextResponse.json(todo);
}

export async function DELETE(request: Request) {
  const data = await request.json();
  await prisma.todo.delete({ where: { id: data.id } });
  return NextResponse.json({ message: 'Todo deleted' });
}
