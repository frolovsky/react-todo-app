import { TodoItem } from '../../TodoBoard.types';

export interface TodoListItemProps {
  item: TodoItem;
  toggleCompleteTodoItem: (id: number, value: boolean) => void;
  deleteTodo: (id: number) => void;
}

export interface TodoListItemState {}
