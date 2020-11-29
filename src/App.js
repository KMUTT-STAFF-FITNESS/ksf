import React from "react";
import "./Main.css";
import "./App.css";
import "./Fonts.css";
import "react-medium-image-zoom/dist/styles.css";
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
import CreateNoti from "./pages/admin/CreateNoti";
import Notification from "./pages/Notification";
import HowToPlay from "./components/QrScanner/HowToPlay";
import NotiDetail from "./components/Notification/NotificationDetail";
import Payment from "./pages/user/Payment";
import Wait from "./components/Register/Wait";
import UploadRecipt from "./pages/user/UploadRecipt";
import LoginSSO from "./components/Login/LoginSSO";
import HomeCheck from "./pages/HomeCheck";
import NoPermission from "./pages/NoPermission";
import UserMainLayout from "./components/UserMainLayout";
import TableNotification from "./pages/admin/TableNotification";
import TableReport from "./pages/admin/TableReport";
import SignOut from "./pages/SignOut";
import MachineCreate from "./pages/admin/MachineCreate";
import MachineEdit from "./pages/admin/MachineEdit";

function App() {
  return (
    <Router>
      <Login path="/" />
      <UserMainLayout component={Register} path="/register" />
      <UserMainLayout component={Home} path="/home" />
      <UserMainLayout component={Viewprofile} path="/view" />
      <UserMainLayout component={Payment} path="/payment" />
      <UserMainLayout component={QrScan} path="/qrscanner" />
      <UserMainLayout component={Notification} path="/notification" />
      <UserMainLayout component={ReportProblem} path="/reportproblem" />
      <UserMainLayout component={HowToPlay} path="/howtoplay/:id" />
      <UserMainLayout component={NotiDetail} path="/notidetail/:id" />
      <UserMainLayout component={LoginSSO} path="/comingsoon" />
      <UserMainLayout component={NoPermission} path="/nopermission" />
      <HomeCheck path="/checking" />
      <Wait path="/wait" />
      <UploadRecipt path="/upload" />
      <SignOut path="/signout" />

      {/* admin */}
      <MainLayout component={Dashboard} path="/admin" />
      <MainLayout component={RegisterManage} path="/admin/register" />
      <MainLayout component={FormUpdate} path="/admin/machine" />
      <MainLayout component={MachineCreate} path="/admin/machine/create" />
      <MainLayout component={MachineEdit} path="/admin/machine/:id/edit" />
      <MainLayout component={CreateNoti} path="/admin/createnoti" />
      <MainLayout component={TableReport} path="/admin/report" />
      <MainLayout component={TableNotification} path="/admin/notification" />
      <MainLayout component={CreateNoti} path="/admin/notification/create" />
    </Router>
  );
}

export default App;
