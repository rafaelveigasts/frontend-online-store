import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/Cart" component={ Cart } />
            <Route exact path="/" component={ Home } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
