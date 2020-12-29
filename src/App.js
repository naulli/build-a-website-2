import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from "./containers/Home";
function App() {
  return (
    <Router>
      <Switch>

        <Route path="/my-name">
          <h1>Hello</h1>
          <p>You can call me Joanna</p>
        </Route>

        <Route path="/my-age">
          <h1>18</h1>
          <p>I was born on August 17th, 2002</p>
        </Route>

        <Route path="/where-i-live">
          <h1>Jakarta</h1>
          <p>Tomang</p>
        </Route>

      </Switch>
    </Router>
  );
}      

export default App;
