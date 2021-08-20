import React from 'react';
import TodoBoard from './components/TodoBoard/TodoBoard';
import NavCalendar from './components/NavCalendar/NavCalendar';
import styled from 'styled-components';
import { Container } from './common/styles';

const AppBlock = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
`;

function App() {
  return (
    <Container>
      <AppBlock>
        <NavCalendar />
        <TodoBoard />
      </AppBlock>
    </Container>
  );
}

export default App;
