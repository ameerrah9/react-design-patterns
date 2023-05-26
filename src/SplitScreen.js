import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

// Styles applied to left and right components
const Pane = styled.div`
  // props.weight is a number, so we need to convert it to a string
  // to use it in the flex property
  // comes from the SplitScreen component
  flex: ${(props) => props.weight};
`;

export const SplitScreen = ({
  left: Left,
  right: Right,
  // default to 50/50 split
  leftWeight = 1,
  // default to 50/50 split
  rightWeight = 1,
}) => {
  return (
    <Container>
      <Pane weight={leftWeight} className='left'>
        <Left />
      </Pane>
      <Pane weight={rightWeight} className='right'>
        <Right />
      </Pane>
    </Container>
  );
};
