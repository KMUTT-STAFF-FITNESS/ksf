import React, { useState } from "react";
import ReportInput from "../components/ReportProblem/Report";
import Logo from "../components/core/Logo";
import BtnNext from "../components/core/BtnNext";
import BtnBack from "../components/core/BtnBack";
import { navigate } from "@reach/router";

export default function ReportProblem() {
  const [ReportText, setReportText] = useState([
    {
      selectMachine: "",
      selectIssue: "",
      otherIssue: "",
    },
  ]);

  function handleSubmit() {
    if (ReportText.selectMachine != null && ReportText.selectIssue != null) {
      if (ReportText.selectIssue === "issue3") {
        if (ReportText.otherIssue != null) {
          console.log(ReportText.otherIssue)
          //ส่งไปหลังบ้าน
        } else {
          alert("กรุณากรอกข้อความให้เรียบร้อย2");
        }
      }
    } else {
      alert("กรุณากรอกข้อความให้เรียบร้อย1");
    }
  }
  return (
    <div className="max-w-screen-xl mx-auto min-h-screen">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Logo />
          </div>
          <div className="p-3 w-full lg:w-1/3 overflow-hidden py-4 rounded shadow mx-auto">
            <ReportInput
              reportText={ReportText}
              setReportText={setReportText}
            />
          </div>
        </div>

        <div className="w-full lg:w-1/3 overflow-hidden py-4 mx-auto">
          <div className="row">
            <div className="col-6 py-4">
              <BtnBack text="Back" onClick={() => navigate("/home")} />
            </div>
            <div className="col-6 py-4">
              <BtnNext text="Submit" onClick={() => handleSubmit()} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
