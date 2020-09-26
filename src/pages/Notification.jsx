import React, { useState } from "react";
import Logo from "../components/core/Logo";
import Notification from "../components/Notification/Notifications";
import BtnBack from "../components/core/BtnBack";
import { navigate } from "@reach/router";
import _ from "lodash";

export default function Noti() {
  const [news, setNews] = useState([
    {
      role: "Admin",
      detail: "Example na ja....",
      timeSpand: "11 mins ago",
    },
    {
      role: "Admin1",
      detail: "Example na ja....",
      timeSpand: "11 mins ago",
    },
    {
      role: "Admin2",
      detail: "Example na ja....",
      timeSpand: "11 mins ago",
    },
  ]);
  return (
    <div className="max-w-screen-xl mx-auto min-h-screen">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Logo />
          </div>
          <div className="col-12">
            <div className="text-center mx-auto">
              <div className="p-3 w-full lg:w-1/3 overflow-hidden py-4 rounded shadow mx-auto">
                {_.map(news, (data, index) => (
                  <div onClick={() => navigate("/notidetail")} key={index}>
                    <Notification />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-6 col-lg-4 text-center mx-auto my-3">
              <BtnBack
                className="buttonBack"
                onClick={() => navigate("/home")}
                text="Back"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
