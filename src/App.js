import './App.css';
import { SplitScreen } from './SplitScreen';

const LeftHandComponent = () => {
  return (
    <div className='left'>
      <h1>Left</h1>
    </div>
  );
};

const RightHandComponent = () => {
  return (
    <div className='right'>
      <h1>Right</h1>
    </div>
  );
};

function App() {
  return (
    <SplitScreen
      left={LeftHandComponent}
      right={RightHandComponent}
      // make the left component 1/4 of the screen
      leftWeight={1}
      // make the right component 3/4 of the screen
      rightWeight={3}
    />
  );
}

export default App;
