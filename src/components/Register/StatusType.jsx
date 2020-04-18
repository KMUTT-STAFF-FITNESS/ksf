import React, { label } from "react";
import Logo from "../core/Logo";
import BtnNext from "../core/BtnNext";
import BtnBack from "../core/BtnBack";

export default function StatusType() {
  return (
    <>
      <p className="text-gray-700 text-lg font-bold">สถานะสมาชิก</p>
      <div className="row my-3">
        <div className="col align-self-center">
          <div className="btn-group-toggle my-3" data-toggle="buttons">
            <label className="btn btn-secondary col-3">
              <input type="radio" /> รายปี
            </label>
          </div>
          <div className="btn-group-toggle my-3" data-toggle="buttons">
            <label className="btn btn-secondary col-3">
              <input type="radio" /> ตลอดชีพ
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
