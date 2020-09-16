import React, { useState } from "react";
import ReportInput from "../components/ReportProblem/Report";
import Logo from "../components/core/Logo";
import BtnNext from "../components/core/BtnNext";
import BtnBack from "../components/core/BtnBack";

export default function ReportProblem() {
  const [ReportText, setReportText] = useState([
    {
      selectMachine: "",
      selectIssue: "",
    },
  ]);
  const [isOpenOtherInput, setIsOpenOtherInput] = useState("");
  const [otherIssue, setOtherIssue] = useState([
    {
      other_issue: "",
    },
  ]);
  function handleSubmit() {
    if (ReportText.selectMachine != null && ReportText.selectIssue != null) {
      if (ReportText.selectIssue == "issue3") {
        if (otherIssue != null) {
          //ส่งไปหลังบ้าน
        } else {
          window.alert("กรุณากรอกข้อความให้เรียบร้อย");
        }
      } else {
        window.alert("กรุณากรอกข้อความให้เรียบร้อย");
      }
    } else {
      window.alert("กรุณากรอกข้อความให้เรียบร้อย");
    }
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Logo />
        </div>
        <div className="p-3 w-full lg:w-1/3 overflow-hidden py-4 rounded shadow mx-auto">
          <ReportInput />
        </div>
      </div>

      <div className="w-full lg:w-1/3 overflow-hidden py-4 mx-auto">
        <div className="row">
          <div className="col-6 py-4">
            <BtnBack text="Back" />
          </div>
          <div className="col-6 py-4">
            <BtnNext text="Submit" 
            onClick ={() => handleSubmit()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
