import React from "react";
import "./Main.css";
import { Router } from "@reach/router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./components/ProfileSetting/Home";
import Viewprofile from "./components/ProfileSetting/ViweProfile";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/admin/Dashboard";
import RegisterManage from "./pages/admin/RegisterManage";

function App() {
  return (
    <Router>
      <Login path="/" exact />
      <Register path="/register" />
      <Home path="/home" />
      <Viewprofile path="/view" />

      {/* admin */}
      <MainLayout component={Dashboard} path="/admin" />
      <MainLayout component={RegisterManage} path="/admin/register" />
    </Router>
  );
}

export default App;
