import { TodoItem } from '../../TodoBoard.types';
import { FormEvent } from 'react';

export interface TodoListItemProps {
  item: TodoItem;
  toggleCompleteTodoItem: (e: FormEvent<HTMLElement>, id: number, value: boolean) => void;
  deleteTodo: (e: FormEvent<HTMLElement>, id: number) => void;
}

export interface TodoListItemState {}
