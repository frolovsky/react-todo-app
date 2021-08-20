import { Component } from 'react';
import { TodoListProps, TodoListState } from './TodoList.types';
import TodoListItem from './TodoListItem/TodoListItem';


export default class TodoList extends Component<TodoListProps, TodoListState> {
  render() {
    return (
      <div>
        <ul>
          {
            this.props.todos.map(todo => {
              return <TodoListItem
                key={todo.id}
                item={todo}
                toggleCompleteTodoItem={this.props.toggleCompleteTodoItem} />
            })
          }
        </ul>
      </div>
    )
  }
}
