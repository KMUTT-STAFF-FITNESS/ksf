import React, { useCallback, useContext, useEffect, useState } from "react";
import ImageProfile from "../core/ImageProfile";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ReportProblemIcon from "@material-ui/icons/ReportProblem";
import CropFreeIcon from "@material-ui/icons/CropFree";
import { navigate } from "@reach/router";
import { ExitToApp } from "@material-ui/icons";
import { apiFetchUserByUserId } from "../../api/users";
import { storesContext } from "../../context";
import Loading from "../core/Loading";

export default function Home() {
  const [memberCard, setMemberCard] = useState();
  const { authenticationStore } = useContext(storesContext);
  const [isFetch, setIsFetch] = useState(false);

  const fetchData = useCallback(async () => {
    setIsFetch(true);
    const { data } = await apiFetchUserByUserId(
      authenticationStore.currentUserId
    );
    setMemberCard(data);
    setIsFetch(false);
  }, [authenticationStore]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isFetch) {
    return (
      <div className="flex flex-col flex-1 min-h-screen">
        <Loading />
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto min-h-screen">
      <div className="container">
        <div className="row">
          <div className="col-12 py-4">
            <div
              class="cardcolor rounded-lg p-6 shadow cursor-pointer"
              onClick={() => navigate("/view")}
            >
              <ImageProfile />
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
