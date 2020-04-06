import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './Main.css';

import Login from './components/Login'
import Info1 from './components/Info1'
import Info2 from './components/Info2'

function App() {
  return (
    <Router>
      <Route path="/">
        <Login />
      </Route>
      <Route path="/register">
        <Info1 />
      </Route>
    </Router>

  );
}

export default App;
