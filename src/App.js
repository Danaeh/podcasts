import { Spinner } from './components/Spinner/Spinner';
import './App.css';
import {Main} from "./containers/Main";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">


      </header>
      <div>
        Spiner y buscador?
        <Spinner />
      </div>
      <Main />
    </div>
  );
}

export default App;
