import ButtonCom from './ButtonCom';
import './DynamicTabs'
import DynamicTabbedView from './DynamicTabs';
import MultiSelectList from './MultiSelectList';

function App() {
  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100vh' }}>
      {/* <DynamicTabbedView></DynamicTabbedView> */}
      <MultiSelectList></MultiSelectList>
      {/* <ButtonCom label={'Button Name'}></ButtonCom> */}
    </div>
  );
}

export default App;
