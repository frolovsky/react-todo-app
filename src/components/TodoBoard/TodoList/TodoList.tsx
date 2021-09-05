import { Component } from 'react';
import { TodoListProps, TodoListState } from './TodoList.types';
import TodoListItem from './TodoListItem/TodoListItem';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export default class TodoList extends Component<TodoListProps, TodoListState> {
  render() {
    return (
      <div>
        <List>
          {
            this.props.todos.map(todo => {
              return <TodoListItem
                key={todo.id}
                item={todo}
                toggleCompleteTodoItem={this.props.toggleCompleteTodoItem}
                deleteTodo={this.props.deleteTodo}
              />
            })
          }
        </List>
      </div>
    )
  }
}
