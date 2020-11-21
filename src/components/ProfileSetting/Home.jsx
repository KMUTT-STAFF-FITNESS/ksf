import React, { useState } from "react";
import ImageProfile from "../core/ImageProfile";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ReportProblemIcon from "@material-ui/icons/ReportProblem";
import CropFreeIcon from "@material-ui/icons/CropFree";
import { navigate } from "@reach/router";
import { ExitToApp } from "@material-ui/icons";

export default function Home() {
  const [MemberCard, setMemberCard] = useState({
    fname: "Sarinrat",
    lname: "Charoenkunasit",
    status: "Year",
    depart: "Information Technology",
    memberID: "xxx-xxx-xxxx",
  });

  return (
    <div className="max-w-screen-xl mx-auto min-h-screen">
      <div className="container">
        <div className="row">
          <div className="col-12 py-4">
            <div
              class="col-12 md:flex cardcolor rounded-lg p-6shadow "
              onClick={() => navigate("/view")}
            >
              <ImageProfile className="buttonHome" />
              <div class=" md:text-left text-center">
                <div class="text-lg-mx text-white mx-10">
                  {MemberCard.fname} {MemberCard.lname}
                </div>
                <div class="text-green-500">Status: {MemberCard.status}</div>
                <div class="text-white">{MemberCard.memberID}</div>
                <div class="text-white">{MemberCard.depart}</div>
              </div>
            </div>
            <div className="row py-8">
              <div className="col-6 text-center">
                <div className="shadow rounded">
                  <button
                    className=" bg-transparent font-semibold py-10 w-full"
                    onClick={() => navigate("/notification")}
                  >
                    <NotificationsIcon
                      className="buttonHome"
                      fontSize="large"
                    />
                    <h5 className="whitespace-no-wrap">Notification</h5>
                  </button>
                </div>
              </div>
              <div className="col-6 text-center">
                <div className="shadow rounded">
                  <button
                    className="bg-transparent font-semibold  py-10 w-full"
                    onClick={() => navigate("/reportproblem")}
                  >
                    <ReportProblemIcon
                      className="buttonHome"
                      fontSize="large"
                    />
                    <h5 className="whitespace-no-wrap">Report Issue</h5>
                  </button>
                </div>
              </div>
              <div className="col-6 text-center py-4">
                <div className="shadow rounded">
                  <button
                    className="bg-transparent font-semibold  py-10 w-full"
                    onClick={() => navigate("/qrscanner")}
                  >
                    <CropFreeIcon className="buttonHome" fontSize="large" />
                    <h5 className="whitespace-no-wrap">Scan QR code</h5>
                  </button>
                </div>
              </div>
              <div className="col-6 text-center py-4">
                <div className="shadow rounded">
                  <button
                    className="bg-transparent font-semibold  py-10 w-full"
                    onClick={() => navigate("/signout")}
                  >
                    <ExitToApp className="buttonHome" fontSize="large" />
                    <h5 className="whitespace-no-wrap">Logout</h5>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
