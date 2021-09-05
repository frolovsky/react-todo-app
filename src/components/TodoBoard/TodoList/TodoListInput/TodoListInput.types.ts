import { TodoItem } from '../../TodoBoard.types';

export interface TodoListInputProps {
  addTodo: (item: TodoItem) => void;
}

export interface TodoListInputState {
  inputText: string;
}
