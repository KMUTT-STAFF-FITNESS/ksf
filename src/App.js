import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './Main.css';

import Login from './components/Login'
import Info1 from './components/Register/Info1'
import Info2 from './components/Register/Info2'
import Info3 from './components/Register/Info3'
import StatusType from './components/Register/StatusType'

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
      <Route path="/StatusType">
        <StatusType />
      </Route>
    </Router>

  );
}

export default App;
