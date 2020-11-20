import React from "react";
import { navigate } from "@reach/router";

export default function Complete() {
  return (
    <div>
      <div className="HeadText">
        <p className="text-orange-700 text-4xl font-bold">Complete!</p>
      </div>
      <div className="col-12">
        <div
          className=" bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center cursor-pointer my-2"
          onClick={() => navigate("/payment")}
        >
          ชำระเงิน
        </div>
      </div>
    </div>
  );
}
