
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

//just testing the app
export default App;
