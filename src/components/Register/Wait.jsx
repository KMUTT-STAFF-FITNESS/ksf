import { navigate } from "@reach/router";
import React from "react";
import BtnBack from "../core/BtnBack";
import Logo from "../core/Logo";

export default function Wait() {
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
            <p className="text-gray-700 text-center my-4">Wait for approve</p>
            <BtnBack text="Payment Page" onClick={() => navigate("/payment")} />
          </div>
        </div>
      </div>
    </div>
  );
}
