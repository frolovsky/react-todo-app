import { TodoItem } from '../../TodoBoard.types';
import { FormEvent } from 'react';

export interface TodoListItemProps {
  item: TodoItem;
  toggleCompleteTodoItem: (e: FormEvent<HTMLElement>, id: number | string, value: boolean) => void;
  deleteTodo: (e: FormEvent<HTMLElement>, id: number | string) => void;
}

export interface TodoListItemState {}
