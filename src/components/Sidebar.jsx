import React, { useState } from "react";
import { navigate } from "@reach/router";
import {
  DescriptionRounded,
  PersonRounded,
  ArrowDropDownRounded,
  ExitToAppRounded,
  GroupAdd,
  AccountTree,
  SettingsRounded,
  PermMediaRounded,
  RadioRounded,
  StorageRounded,
  DashboardRounded
} from "@material-ui/icons";
import { Menu } from "@material-ui/core";
import { useObserver } from "mobx-react-lite";
import SidebarTab from "./SidebarTab";
import Logo from "../components/core/LogoWhite"
// import SidebarTab from "./SidebarTab";

export default function Sidebar(props) {
  /**
  |--------------------------------------------------
  | Contexts
  |--------------------------------------------------
  */
  //  const { authenticationStore } = useContext(storesContext)

  /**
|--------------------------------------------------
| States
|--------------------------------------------------
*/
  const [anchorEl, setAnchorEl] = useState(null);

  /**
|--------------------------------------------------
| Handlers
|--------------------------------------------------
*/
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  /**
|--------------------------------------------------
| Handlers
|--------------------------------------------------
*/
  function handlerTabClick(url) {
    navigate(url);
  }

  /**
|--------------------------------------------------
| Render
|--------------------------------------------------
*/
  return useObserver(() => (
    <div className="flex-shrink-0 w-56" style={{backgroundColor: '#023356'}}>
      <div className="py-4">
        <div className="px-4 mb-4">
        <img className="mx-auto" src="image/logowhite.png" width="227px" alt="logo"/>
        </div>
        {/* <div className="flex justify-between">
          <Menu
            
            id="long-menu"
            elevation={0}
            anchorEl={anchorEl}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            MenuListProps={{ disablePadding: true }}
          >
            <div className="border rounded py-2">
              <div
                className="flex w-48 py-2 px-3 cursor-pointer text-center items-center hover:bg-gray-200"
                onClick={() => navigate(`/signout`)}
              >
                <ExitToAppRounded className="text-gray-600 mr-3" />
                <p className="w-auto text-sm">ลงชื่อออก</p>
              </div>
            </div>
          </Menu>
        </div> */}
      </div>

      <SidebarTab
        id="dashboard"
        name="Dashboard"
        icon={DashboardRounded}
        onClick={() => handlerTabClick("/admin")}
        currentTab={props.currentTab}
      />
      <SidebarTab
        id="register"
        name="Register Manage"
        icon={DashboardRounded}
        onClick={() => handlerTabClick("/admin/register")}
        currentTab={props.currentTab}
      />
      <SidebarTab
        id="register"
        name="Add Item"
        icon={DashboardRounded}
        onClick={() => handlerTabClick("/admin/formupdate")}
        currentTab={props.currentTab}
      />
    </div>
  ));
}
