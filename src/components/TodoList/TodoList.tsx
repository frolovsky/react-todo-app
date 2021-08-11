import { Component } from 'react';
import { getTodos } from '../../api/api';
import { TodoListProps, TodoListState } from './TodoList.types';
import TodoListItem from './TodoListItem/TodoListItem';
import update from 'immutability-helper';


export default class TodoList extends Component<TodoListProps, TodoListState> {
  constructor(props: TodoListProps) {
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
      <div>
        <ul>
          {
            this.state.todos.map(todo => {
              return <TodoListItem
                key={todo.id}
                item={todo}
                toggleComplete={this.toggleCompleteTodoItem} />
            })
          }
        </ul>
      </div>
    )
  }
}
