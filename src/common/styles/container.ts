import styled from 'styled-components';

const Container = styled.div`
  display: block;
  max-width: 1600px;
  width: 98%;
  margin: 0 auto;
`;

const FlexContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export {
  Container,
  FlexContainer,
};
