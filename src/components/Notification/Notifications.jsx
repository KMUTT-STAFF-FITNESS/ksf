import React from "react";

export default function Notifications(props) {
  return (
    <div className="max-w-screen-xl mx-auto ">
      <div className="container">
        <div className="col-12">
          <div className=" mx-auto">
            <div className=" p-3 w-full  overflow-hidden py-4 rounded shadow mx-auto">
              <div className="row">
                <div className="text-left mx-auto">
                  <strong className="text-lg text-left mx-4 font-bold ">
                    {props.news.message_title}
                  </strong>
                </div>
                <div className="text-right text-gray-700 mx-auto">
                  <small>{props.news.create_at}</small>
                </div>
              </div>
              <p className="text-gray-700 truncate text-left">{props.news.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
