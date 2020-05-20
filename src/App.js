import React from 'react';
import './Main.css';
import { Router } from "@reach/router"
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './components/ProfileSetting/Home'
import Viewprofile from './components/ProfileSetting/ViweProfile'

function App() {
  return (
    <Router>
     <Login  path="/" exact/>
     <Register path="/register" />
     <Home path="/home" />
     <Viewprofile path="/view" />
    </Router>
  );
}

export default App;
