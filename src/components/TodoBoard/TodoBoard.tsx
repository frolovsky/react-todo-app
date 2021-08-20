import { Component } from 'react';
import { TodoBoardProps, TodoBoardState } from './TodoBoard.types';
import TodoList from './TodoList/TodoList';
import { getTodos } from '../../api/api';
import update from 'immutability-helper';

export default class TodoBoard extends Component<TodoBoardProps, TodoBoardState> {
  constructor(props: TodoBoardProps) {
    super(props);
    this.state = {
      todos: [],
    };
    this.toggleCompleteTodoItem = this.toggleCompleteTodoItem.bind(this);
  }

  async componentDidMount() {
    const todos = await getTodos();
    this.setState({ todos: todos.splice(0, 5) });
  }

  toggleCompleteTodoItem(id: number, value: boolean) {
    const todoIndex = this.state.todos.findIndex(todo => todo.id === id);
    this.setState({
      todos: update(
        this.state.todos,
        {
          [todoIndex]: {
            $merge: { completed: !value }
          }
        }
      )
    });
  }

  render() {
    return (
      <TodoList
        todos={this.state.todos}
        toggleCompleteTodoItem={this.toggleCompleteTodoItem}
      />
    )
  }
}
