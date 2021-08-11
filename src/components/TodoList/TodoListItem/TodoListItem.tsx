import { Component } from 'react';
import { TodoListItemProps, TodoListItemState } from './TodoListItem.types';

export default class TodoListItem extends Component<TodoListItemProps, TodoListItemState> {
  render() {
    const item = this.props.item;
    return (
      <li>
        <span>{ item.title }</span>
        <input type='checkbox' checked={item.completed} onChange={() => this.props.toggleComplete(item.id, item.completed)} />
      </li>
    )
  }
}
