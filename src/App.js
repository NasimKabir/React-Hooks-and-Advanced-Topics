import './App.css';
import MultipleInputForms from './hooks/MultipleInputForms';
import MultipleReturnsFetchingExample from './hooks/MultipleReturnsFetchingExample';
import UseEffectFetchApi from './hooks/UseEffectFetchApi';
import { UseStateArray } from './hooks/UseStateArray';
import UseStateObject from './hooks/UseStateObject';
import UseState_basic from './hooks/UseState_basic';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import UseRef from './hooks/UseRef';
import UseReducerHookONe from './hooks/UseReducerHookONe';
function App() {
  return (
    <div className="App">
      {/* <UseState_basic /> */}
      {/* <UseStateArray /> */}
      {/* <UseStateObject /> */}
      {/* <UseEffectFetchApi /> */}
      {/* < MultipleReturnsFetchingExample /> */}
      {/* <MultipleInputForms /> */}
      {/* <UseRef /> */}
      <UseReducerHookONe />
    </div>
  );
}

export default App;
