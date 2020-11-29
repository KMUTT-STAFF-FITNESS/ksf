import React from "react";
import { navigate } from "@reach/router";
import {
  PersonRounded,
  ExitToAppRounded,
  GroupRounded,
  FitnessCenterRounded,
  ReportProblemRounded,
  NotificationsActiveRounded,
} from "@material-ui/icons";
import { useObserver } from "mobx-react-lite";
import SidebarTab from "./SidebarTab";

export default function Sidebar(props) {
  function handlerTabClick(url) {
    navigate(url);
  }

  return useObserver(() => (
    <div className="flex-shrink-0 w-56" style={{ backgroundColor: "#023356" }}>
      <div className="py-4">
        <div className="px-4 mb-4">
          <img
            className="mx-auto"
            src="/image/logowhite.png"
            width="227px"
            alt="logo"
          />
        </div>
      </div>

      <SidebarTab
        id="dashboard"
        name="อนุมัติการสมัครสมาชิก"
        icon={PersonRounded}
        onClick={() => handlerTabClick("/admin")}
        currentTab={props.currentTab}
      />
      <SidebarTab
        id="register"
        name="การจัดการสมาชิก"
        icon={GroupRounded}
        onClick={() => handlerTabClick("/admin/register")}
        currentTab={props.currentTab}
      />
      <SidebarTab
        id="machine"
        name="การจัดการเครื่องออกกำลังกาย"
        icon={FitnessCenterRounded}
        onClick={() => handlerTabClick("/admin/machine")}
        currentTab={props.currentTab}
      />
      <SidebarTab
        id="notification"
        name="การจัดการข่าวสาร"
        icon={NotificationsActiveRounded}
        onClick={() => handlerTabClick("/admin/notification")}
        currentTab={props.currentTab}
      />
      <SidebarTab
        id="report"
        name="การจัดการปัญหา"
        icon={ReportProblemRounded}
        onClick={() => handlerTabClick("/admin/report")}
        currentTab={props.currentTab}
      />
      <SidebarTab
        id="signout"
        name="ลงชื่อออก"
        icon={ExitToAppRounded}
        onClick={() => handlerTabClick("/signout")}
        currentTab={props.currentTab}
      />
    </div>
  ));
}
