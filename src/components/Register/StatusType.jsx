import React, { label } from 'react'
import Logo from '../core/Logo'
import BtnNext from '../core/BtnNext';
import BtnBack from '../core/BtnBack';


export default function StatusType() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Logo />
        </div>
        <div className="col-12">
          <div className="text-center mx-auto">
            <div class="mx-auto max-w-sm overflow-hidden py-4 rounded shadow">
              <p class="text-gray-700 text-lg font-bold">
                สถานะสมาชิก
                </p>
              <div className="row my-3">
                <div className="col align-self-center">
                  <div className="btn-group-toggle my-3" data-toggle="buttons">
                    <label className="btn btn-secondary col-3">
                      <input type="radio"  /> รายปี
                    </label>
                  </div>
                  <div className="btn-group-toggle my-3" data-toggle="buttons">
                    <label className="btn btn-secondary col-3">
                      <input type="radio"  /> ตลอดชีพ
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-8 col-md-8 col-lg-4 mx-auto my-3">
              <div className="row">
                <div className="col-6 ">
                  <BtnBack text="Back " />
                </div>
                <div className="col-6  ">
                  <BtnNext text="Next" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
