export interface TodoBoardProps {}

export interface TodoBoardState {
  todos: TodoItem[];
}

export interface TodoItem {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}
