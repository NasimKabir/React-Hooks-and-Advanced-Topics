import './App.css';
import MultipleReturnsFetchingExample from './hooks/MultipleReturnsFetchingExample';
import UseEffectFetchApi from './hooks/UseEffectFetchApi';
import { UseStateArray } from './hooks/UseStateArray';
import UseStateObject from './hooks/UseStateObject';
import UseState_basic from './hooks/UseState_basic';
function App() {
  return (
    <div className="App">
      {/* <UseState_basic /> */}
      {/* <UseStateArray /> */}
      {/* <UseStateObject /> */}
      {/* <UseEffectFetchApi /> */}
      < MultipleReturnsFetchingExample />
    </div>
  );
}

export default App;
