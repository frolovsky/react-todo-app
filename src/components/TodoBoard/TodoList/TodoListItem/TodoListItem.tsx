import { Component } from 'react';
import { TodoListItemProps, TodoListItemState } from './TodoListItem.types';
import styled from 'styled-components';

const ListItemButton = styled.button`
  cursor: pointer;
  background: linear-gradient(180deg, rgba(204,33,33,1) 0%, rgba(177,18,88,1) 100%);
  color: #fff;
  font-weight: bold;
  border-radius: 20px;
  padding: 5px 15px;
  border: 0;
  outline: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all 0.2s;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: rgba(0, 0, 0, .05);
  }
  
  &:hover ${ListItemButton} {
    opacity: 1;
  }
`;

const ListItemControls = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  grid-gap: 8px;
  margin-right: 16px;
`;

const ListItemText = styled.span`
  color: #fff;
`;

const ListItemCheckbox = styled.input``;

export default class TodoListItem extends Component<TodoListItemProps, TodoListItemState> {
  render() {
    const item = this.props.item;
    return (
      <ListItem
        onClick={(e) => this.props.toggleCompleteTodoItem(e, item.id, item.completed)}
      >
        <ListItemControls>
          <ListItemButton
            type='button'
            onClick={(e) => this.props.deleteTodo(e, item.id)}
          >
            Remove
          </ListItemButton>
          <ListItemCheckbox
            type='checkbox'
            checked={item.completed}
            onChange={(e) => this.props.toggleCompleteTodoItem(e, item.id, item.completed)}
          />
        </ListItemControls>
        <ListItemText>{ item.title }</ListItemText>
      </ListItem>
    )
  }
}
