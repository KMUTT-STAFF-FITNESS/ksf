import React from "react";

export default function SumProfile(props) {
  return (
    <>
      <p className="text-grey-700 text-lg font-bold">ข้อมูลส่วนตัว</p>
      <div className="mx-auto max-w-xs py-2">
        <div className="flex">
          <p>ชื่อ : {props.profile.fname}</p>
          <p>นามสกุล : {props.profile.lname}</p>
          <p>เบอร์โทร : {props.profile.tel_no}</p>
          <p>วัน/เดือน/ปี เกิด : {props.profile.dob}</p>
          <p>เพศ : {props.profile.gender}</p>
          
        </div>
      </div>
    </>
  );
}
