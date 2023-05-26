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
  children,
  // default to 50/50 split
  leftWeight = 1,
  // default to 50/50 split
  rightWeight = 1,
}) => {
  // Destructure the children prop
  const [Left, Right] = children;
  return (
    <Container>
      <Pane weight={leftWeight} className='left'>
        {/* Render the Left component */}
        {/* This is the same as <LeftHandComponent /> */}
        {Left}
      </Pane>
      <Pane weight={rightWeight} className='right'>
        {/* Render the Right component */}
        {/* This is the same as <RightHandComponent /> */}
        {Right}
      </Pane>
    </Container>
  );
};
