import React from "react";
import Logo from "../core/Logo";
import BtnBack from "../core/BtnBack";
import { navigate } from "@reach/router";

export default function LoginSSO() {
  return (
    <div className="max-w-screen-xl mx-auto min-h-screen">
      <Logo />
      <div className="container">
        <div className="row my-54">
          <div className="col">
            <img
              className="mx-auto my-5"
              width="227px"
              src="image/wait.png"
              alt=""
            />
            <p className="text-gray-700 text-center my-4">Coming soon</p>
            <BtnBack text="Back" onClick={() => navigate("/")} />
          </div>
        </div>
      </div>
    </div>
  );
}
