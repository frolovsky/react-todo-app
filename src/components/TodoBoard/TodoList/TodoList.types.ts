import { TodoItem } from '../TodoBoard.types';

export interface TodoListProps {
  todos: TodoItem[];
  toggleCompleteTodoItem: (id: number, value: boolean) => void;
}

export interface TodoListState {}
