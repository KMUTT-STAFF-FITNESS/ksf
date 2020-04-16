import React from 'react'
import Logo from "../core/Logo"
import BtnNext from '../core/BtnNext';
import BtnBack from '../core/BtnBack';

export default function Pdpa() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Logo />
        </div>
        <div className="col-12">
          <div className="text-center mx-auto">
            <div class="mx-auto max-w-sm overflow-hidden py-4 rounded shadow">
              <p className="col-12 text-gray-700 text-lg py-2">
                "Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                magni dolores eos qui ratione voluptatem sequi nesciunt.
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi tempora
                incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
                quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?"
                  </p>
                  <div className="">

                  </div>
            </div>
            <div className="col-12 col-sm-8 col-md-8 col-lg-4 mx-auto my-3">
              <div className="row">
                <div className="col-6 ">
                  <BtnBack text="ไม่ยินยอม " />
                </div>
                <div className="col-6  ">
                  <BtnNext text="ยินยอม" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
