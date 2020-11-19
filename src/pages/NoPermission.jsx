import { navigate } from "@reach/router";
import React from "react";
import BtnBack from "../components/core/BtnBack";
import Logo from "../components/core/Logo";

export default function NoPermission() {
  return (
    <div className="max-w-screen-xl mx-auto min-h-screen">
      <Logo />
      <div className="container">
        <div className="row my-5">
          <div className="col-12">
            <img
              className="mx-auto my-5"
              width="227px"
              src="image/wait.png"
              alt=""
            />
            <p className="text-gray-700 text-center my-4">You don't have permission to access this website</p>
            <BtnBack text="Back" onClick={() => navigate("/")} />
          </div>
        </div>
      </div>
    </div>
  );
}
