import React from "react";
import "./Main.css";
import "./App.css";
import { Router } from "@reach/router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./components/ProfileSetting/Home";
import Viewprofile from "./components/ProfileSetting/ViweProfile";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/admin/Dashboard";
import RegisterManage from "./pages/admin/RegisterManage";
import QrScan from "./pages/QrScan";
import ReportProblem from "./pages/ReportProblem";
import FormUpdate from "./pages/admin/FormUpdate";
import Notification from "./pages/Notification";
import ExerciseDashboard from "./components/ExerciseDashboard/Dashboard";
import HowToPlay from "./components/QrScanner/HowToPlay";
import NotiDetail from "./components/Notification/NotificationDetail";
import Payment from "./pages/user/Payment";
import Wait from "./components/Register/Wait";
import UploadRecipt from "./pages/user/UploadRecipt";

function App() {
  return (
    <Router>
      <Login path="/" exact />
      <Register path="/register" />
      <Home path="/home" />
      <Viewprofile path="/view" />
      <Payment path="/payment" />
      <QrScan path="/qrscanner" />
      <Notification path="/notification" />
      <ReportProblem path="/reportproblem" />
      <ExerciseDashboard path="/exercise" />
      <HowToPlay path="/howtoplay" />
      <NotiDetail path="/notidetail/:id" />
      <UploadRecipt path="/upload" />
      <Wait path="/wait" />
      {/* admin */}
      <MainLayout component={Dashboard} path="/admin" />
      <MainLayout component={RegisterManage} path="/admin/register" />
      <MainLayout component={FormUpdate} path="/admin/machine" />
    </Router>
  );
}

export default App;
