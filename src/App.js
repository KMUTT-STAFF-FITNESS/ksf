import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './Main.css';

import Login from './components/Login'
import Register from './components/Register/Register'

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </Router>

  );
}

export default App;
