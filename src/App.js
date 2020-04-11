import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './Main.css';

import Login from './components/Login'
import Info1 from './components/Info1'
import Info2 from './components/Info2'
import Info3 from './components/Info3'

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/register">
        <Info1 />
      </Route>
      <Route path="/register2">
        <Info2 />
      </Route>
      <Route path="/register3">
        <Info3 />
      </Route>
    </Router>

  );
}

export default App;
