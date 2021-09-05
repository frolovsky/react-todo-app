import { TodoListInputProps, TodoListInputState } from './TodoListInput.types';
import { Component, FormEvent } from 'react';
import styled from 'styled-components';
import { APP_BORDER_RADIUS } from '../../../../common/styles/_variables';
import generateId from '../../../../helpers/generateId';

const InputWrapper = styled.li`
  display: flex;
  align-items: center;
`;

const SubmitButton = styled.button`
  cursor: pointer;
  border: none; 
  outline: none;
  height: 40px;
  min-width: 130px;
  border-bottom-left-radius: ${APP_BORDER_RADIUS}px;
  border-top-left-radius: ${APP_BORDER_RADIUS}px;
`;

const TextInput = styled.input`
  padding: 10px;
  border: none;
  outline: none;
  height: 40px;
  box-sizing: border-box;
  min-width: 500px;
  background-color: rgba(255, 255, 255, .3);
  border-bottom-right-radius: ${APP_BORDER_RADIUS}px;
  border-top-right-radius: ${APP_BORDER_RADIUS}px;
`;

export default class TodoListInput extends Component<TodoListInputProps, TodoListInputState> {
  constructor(props: TodoListInputProps) {
    super(props);
    this.state = {
      inputText: '',
    };

    this.handleTextInputChange = this.handleTextInputChange.bind(this);
    this.handleSubmitButtonClick = this.handleSubmitButtonClick.bind(this);
  }

  handleTextInputChange(e: FormEvent<HTMLInputElement>) {
    this.setState({ inputText: e.currentTarget.value })
  }

  handleSubmitButtonClick(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (this.state.inputText) {
      this.props.addTodo({
        id: generateId(),
        title: this.state.inputText,
        completed: false,
      });

      this.setState({ inputText: '' });
    }
  }

  render() {
    return (
      <InputWrapper>
        <form>
          <SubmitButton
            onClick={this.handleSubmitButtonClick}
            type='submit'
          >
            Add
          </SubmitButton>
          <TextInput
            autoComplete='off'
            name='todo-text'
            value={this.state.inputText}
            onChange={this.handleTextInputChange}
          />
        </form>
      </InputWrapper>
    )
  }
}
