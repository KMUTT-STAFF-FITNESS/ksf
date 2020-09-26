import React, { useState } from "react";
import { Field, Formik } from "formik";
import Input from "../core/Input";
import {apiCreateReportTemplate} from "../../api/report"

export default function Report(props) {
  const [DropDownValue, setDropDownValue] = useState(true);

  // const setSelect =()=>{
  //   if (document.getElementById("non")) {

  //   }
  // }



  function handleChange() {
    if (document.getElementById("non")) {
      return (
        <Field name="ReportText">
          {({ field, meta }) => (
            <div>
              <Input placeholder="แจ้งปัญหาอื่นๆ" inputProps={{ ...field }} />
            </div>
          )}
        </Field>
      );
    }
  }

  return (
    <div>
      <div className="col-12">
        <p className="text-gray-700 text-lg font-bold ">รายงานปัญหา</p>
        <Formik initialValues={props.reportText}>
          <div className=" mx-auto max-w-xs py-2">
            <Field
            onChange={(e) => props.setReportText({...props.reportText, selectMachine: e.target.value})}
              name="selectMachine"
              as="select"
              className={`shadow border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline form-control `}
            >
              <option value="exercise">-เลือกเครื่องออกกำลังกาย-</option>
              <option value="treadmille">ลู่วิ่ง</option>
              <option value="bike">จักรยาน</option>
              <option value="chair">เบาะรองยกน้ำหนัก</option>
            </Field>
            <Field
              onChange={(e) => props.setReportText({...props.reportText, selectIssue: e.target.value})}
              name="selectIssue"
              as="select"
              className={`shadow border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline form-control `}
            >
              <option value="issue">-เลือกปัญหา-</option>
              <option value="issue1">เปิดไม่ติด</option>
              <option value="issue2">ล้อมีปัญหา</option>
              <option value="issue3">อื่นๆ</option>
            </Field>
            {props.reportText.selectIssue === "issue3" && (
              <Field name="otherIssue">
                {({ field, meta }) => <Input inputProps={{ ...field }} />}
              </Field>
            )}

            {/* <Field name="ReportText">
              {({ field, meta }) => (
                <div>
                  <Input
                    placeholder="แจ้งปัญหาอื่นๆ"
                    inputProps={{ ...field }}
                  />
                </div>
              )}
            </Field> */}
          </div>
        </Formik>
        
      </div>
    </div>
  );
}
