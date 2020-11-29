import React from "react";
import _ from "lodash";

export default function StatusType(props) {
  return (
    <>
      <p className="text-gray-700 text-lg font-bold">ประเภทสมาชิก</p>
      <div className="row my-3">
        <div className="col align-self-center">
          {props &&
            _.map(props.type, (data, index) => (
              <>
                {props.selectType === data.member_type_id ? (
                  <div
                    className="bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer my-2"
                    onClick={() => props.setSelectType(data.member_type_id)}
                    key={index}
                  >
                    {data.member_type}
                  </div>
                ) : (
                  <div
                    className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer my-2"
                    onClick={() => props.setSelectType(data.member_type_id)}
                    key={index}
                  >
                    {data.member_type}
                  </div>
                )}
              </>
            ))}
        </div>
      </div>
    </>
  );
}
