export interface TodoListProps {}

export interface TodoListState {
  todos: TodoItem[];
}

export interface TodoItem {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}
