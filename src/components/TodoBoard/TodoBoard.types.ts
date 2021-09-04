export interface TodoBoardProps {
  date: string;
}

export interface TodoBoardState {
  todos: Todos;
}

export interface Todos {
  [key: string]: TodoItem[];
}

export interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}
