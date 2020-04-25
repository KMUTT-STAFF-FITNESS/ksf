import React,{ useState } from "react";
import ImageProfile from "../core/ImageProfile";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ReportProblemIcon from "@material-ui/icons/ReportProblem";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import CropFreeIcon from "@material-ui/icons/CropFree";

export default function Home() {
  const [Name, setName] = useState(
    {
      fname: "Sarinrat",
      lname: "Charoenkunasit"
    }
  );
  const [Type, setType] = useState(
    {
      status: "Year",
    }
  );const [Department, setDepartment] = useState(
    {
      depart: "IT",
    }
  );
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 ">
          <div className="cardcolor md:flex rounded-lg m-6  px-4 lg:max-w-full shadow mx-auto">
            <ImageProfile className="buttonHome " />
            <div>
            </div>
            <div className="text-center md:text-left  ">
              <div className="col-2">
                <h2 className="text-lg-mx text-white ">
                {Name.fname}
              </h2>
              <h2 className="text-lg-mx text-white">
                {Name.lname}
              </h2>
              </div>
              
              <div className="text-white col-2">{Type.status}</div>
              <div className="text-white col-2">{Department.depart}</div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <button className=" bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-20 px-20 border md:mr-6 hover:border-transparent rounded ">
                <NotificationsIcon className="buttonHome" fontSize="large" />
                <h5> Notification</h5>
              </button>
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-20 px-20 border md:my-6 hover:border-transparent rounded ">
                <ReportProblemIcon className="buttonHome" fontSize="large" />
                <h5> Notification</h5>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-20 px-20 border md:mr-6 hover:border-transparent rounded ">
                <CropFreeIcon className="buttonHome" fontSize="large" />
                <h5> Notification</h5>
              </button>
              <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-20 px-20 border hover:border-transparent rounded ">
                <FitnessCenterIcon className="buttonHome" fontSize="large" />
                <h5> Notification</h5>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
