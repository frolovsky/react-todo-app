import { TodoItem } from '../TodoBoard.types';

export interface TodoListProps {
  todos: TodoItem[];
  toggleCompleteTodoItem: (id: number, value: boolean) => void;
  addTodo: (todo: TodoItem) => void;
  deleteTodo: (id: number) => void;
}

export interface TodoListState {}
