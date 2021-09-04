import { Component } from 'react';
import { TodoBoardProps, TodoBoardState, TodoItem } from './TodoBoard.types';
import TodoList from './TodoList/TodoList';
import { getTodos } from '../../api/api';
import update from 'immutability-helper';

export default class TodoBoard extends Component<TodoBoardProps, TodoBoardState> {
  constructor(props: TodoBoardProps) {
    super(props);
    this.state = {
      todos: {},
    };
    this.toggleCompleteTodoItem = this.toggleCompleteTodoItem.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  async componentDidMount() {
    const todos = await getTodos();
    this.setState({
      todos: {
        ...this.state.todos,
        [this.props.date]: todos.splice(0, 5),
      },
    });
  }

  toggleCompleteTodoItem(id: number, value: boolean) {
    const todoIndex = this.state.todos[this.props.date].findIndex(todo => todo.id === id);
    this.setState({
      todos: update(
        this.state.todos,
        {
          [this.props.date]: {
            [todoIndex]: {
              $merge: { completed: !value }
            },
          },
        },
      ),
    });
  }

  addTodo(item: TodoItem) {
    this.setState({
      todos: update(
        this.state.todos, {[this.props.date]: {
          $push: [item]
        }}),
    });
  }

  deleteTodo(itemId: number) {
    const index = this.state.todos[this.props.date].findIndex(todo => todo.id === itemId);
    if (index !== -1) {
      this.setState({
        todos: update(this.state.todos, {
          [this.props.date]: {
            $splice: [[index, 1]]
          },
        }),
      });
    }
  }

  componentDidUpdate(prevProps: Readonly<TodoBoardProps>, prevState: Readonly<TodoBoardState>, snapshot?: any) {
    if (!this.state.todos[this.props.date]) {
      this.setState({
        todos: update((this.state.todos), {
          $merge: { [this.props.date]: [] }
        })
      })
    }
  }

  render() {
    const todosKeysLength = Object.keys(this.state.todos).length;
    const todos = this.state.todos[this.props.date];
    return (
      <div>
        { todosKeysLength &&
          <TodoList
            todos={todos ? todos : []}
            toggleCompleteTodoItem={this.toggleCompleteTodoItem}
            addTodo={this.addTodo}
            deleteTodo={this.deleteTodo}
          />
      }
      </div>
    )
  }
}
