import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import Signup from './components/signup';

import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <div>
          <Header></Header>
        </div>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
        </Switch>
      </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
