import { TodoItem } from '../TodoList.types';

export interface TodoListItemProps {
  item: TodoItem;
  toggleComplete: (id: number, value: boolean) => void;
}

export interface TodoListItemState {}
