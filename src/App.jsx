import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';

import './App.css';
import LoginContainer from './components/LoginContainer';
import Home from './components/home';


function App() {
  return (
    <div className="App">      <Router>
        <Switch>
          <Route exact path='/' component={LoginContainer} />
          <Route exact path='/home' component={Home} />
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
