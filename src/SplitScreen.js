import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

// Styles applied to left and right components
const Pane = styled.div`
  flex: 1;
`;

export const SplitScreen = ({ left: Left, right: Right }) => {
  return (
    <Container>
      <Pane className='left'>
        <Left />
      </Pane>
      <Pane className='right'>
        <Right />
      </Pane>
    </Container>
  );
};
