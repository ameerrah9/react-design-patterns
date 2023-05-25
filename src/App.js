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
  return <SplitScreen left={LeftHandComponent} right={RightHandComponent} />;
}

export default App;
