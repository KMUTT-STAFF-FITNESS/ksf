import React, { useState } from "react";
import ImageProfile from "../core/ImageProfile";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ReportProblemIcon from "@material-ui/icons/ReportProblem";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import CropFreeIcon from "@material-ui/icons/CropFree";
import { Link } from "@reach/router";

export default function Home() {
  const [MemberCard, setMemberCard] = useState({
    fname: "Sarinrat",
    lname: "Charoenkunasit",
    status: "Year",
    depart: "Information Technology",
    memberID: "xxx-xxx-xxxx",
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 py-4">
          <Link to="/view">
            <div class="col-12  md:flex cardcolor rounded-lg p-6shadow ">
              <ImageProfile className="buttonHome " />
              <div class=" md:text-left text-center ">
                <div class="text-lg-mx text-white">
                  {MemberCard.fname} {MemberCard.lname}
                </div>
                <div class="text-green-500">Status: {MemberCard.status}</div>
                <div class="text-white">{MemberCard.memberID}</div>
                <div class="text-white">{MemberCard.depart}</div>
              </div>
            </div>
          </Link>
          <div className="row py-6">
            <div className="col-6 text-center">
              <div className="shadow rounded">
                <button className=" bg-transparent font-semibold py-10 w-full">
                  <NotificationsIcon className="buttonHome" fontSize="large" />
                  <h5 className="whitespace-no-wrap">Notification</h5>
                </button>
              </div>
            </div>
            <div className="col-6 text-center">
              <div className="shadow rounded">
                <button className="bg-transparent font-semibold  py-10 w-full">
                  <ReportProblemIcon className="buttonHome" fontSize="large" />
                  <h5 className="whitespace-no-wrap">Report Issue</h5>
                </button>
              </div>
            </div>
            <div className="col-6 text-center">
              <div className="shadow rounded">
                <button className="bg-transparent font-semibold  py-10 w-full">
                  <CropFreeIcon className="buttonHome" fontSize="large" />
                  <h5 className="whitespace-no-wrap">Scan QR code</h5>
                </button>
              </div>
            </div>
            <div className="col-6 text-center">
              <div className="shadow rounded">
                <button className="bg-transparent font-semibold  py-10 w-full">
                  <FitnessCenterIcon className="buttonHome" fontSize="large" />
                  <h5 className="whitespace-no-wrap">Activity</h5>
                </button>
              </div>
            </div>
          </div>
          {/* <iv className="row">
            <div className="col-12 text-center">
              <button className=" bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-20 px-20 border md:mr-6 hover:border-transparent rounded ">
                <NotificationsIcon className="buttonHome" fontSize="large" />
                <h5>Notification</h5>
              </button>
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-20 px-20 border md:my-6 hover:border-transparent rounded ">
                <ReportProblemIcon className="buttonHome" fontSize="large" />
                <h5>Report Issue</h5>
              </button>
            </div>
          </iv>
          <div className="row">
            <div className="col-12 text-center">
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-20 px-20 border md:mr-6 hover:border-transparent rounded ">
                <CropFreeIcon className="buttonHome" fontSize="large" />
                <h5>Scan QR code</h5>
              </button>
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-20 px-20 border hover:border-transparent rounded ">
                <FitnessCenterIcon className="buttonHome" fontSize="large" />
                <h5>Activity</h5>
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
