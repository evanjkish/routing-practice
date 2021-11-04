import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Number from './components/Number';
import Word from './components/Word';

function App() {
  return (
    <div className="App">
      <h1>Routing Example</h1>
      <p>
        <Link to="/">Home</Link>

        <Link to="/about">About</Link>
      </p>

      <hr />

      <Switch>

        <Route path="/word/:str/:txtClr/:bgClr">
          <Word />
        </Route>

        <Route path="/number/:num">
          <Number />
        </Route>


        <Route path="/">
          <Home />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
