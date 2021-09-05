import { TodoItem } from '../TodoBoard.types';
import { FormEvent } from 'react';

export interface TodoListProps {
  todos: TodoItem[];
  toggleCompleteTodoItem: (e: FormEvent<HTMLElement>, id: number, value: boolean) => void;
  addTodo: (todo: TodoItem) => void;
  deleteTodo: (e: FormEvent<HTMLElement>, id: number) => void;
}

export interface TodoListState {}
