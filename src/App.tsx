import React from 'react';
import TodoBoard from './components/TodoBoard/TodoBoard';
import NavCalendar from './components/NavCalendar/NavCalendar';
import styled from 'styled-components';
import { Container } from './common/styles';
import { useState } from 'react';

const AppBlock = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
`;

function App() {
  const [date, setDate] = useState(new Intl.DateTimeFormat('en-GB').format(new Date()));

  return (
    <Container>
      <AppBlock>
        <NavCalendar
          setDate={setDate}
          date={date}
        />
        <TodoBoard
          date={date}
        />
      </AppBlock>
    </Container>
  );
}

export default App;
