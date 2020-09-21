import React, { useState } from "react";
import { Field, Formik } from "formik";
import Input from "../core/Input";
import Button from "../core/Button"

export default function Report() {
  const [DropDownValue, setDropDownValue] = useState(true);
  const [ReportText, setReportText] = useState([
    {
      selectMachine: "",
      selectIssue: "",
    },
  ]);
  const [isOpenOtherInput, setIsOpenOtherInput] = useState("");
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
        <Formik initialValues={ReportText}>
          <div className=" mx-auto max-w-xs py-2">
            <Field
              name="selectMachine"
              as="select"
              className={`shadow border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline form-control `}
            >
              <option value="exercise">-เลือกเครื่องออกกำลังกาย-</option>
              <option value="treadmille">ลู่วิ่ง</option>
              <option value="bike">จักรยาน</option>
              <option value="chair">เบาะรองยกน้ำนหัก</option>
            </Field>
            <Field
              onChange={(e) => setIsOpenOtherInput(e.target.value)}
              name="selectIssue"
              as="select"
              className={`shadow border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline form-control `}
            >
              <option value="issue">-เลือกปัญหา-</option>
              <option value="issue1">เปิดไม่ติด</option>
              <option value="issue2">ล้อมีปัญหา</option>
              <option value="issue3">
                อื่นๆ
              </option>
            </Field>
            {isOpenOtherInput==="issue3" && (
              <Field name="other_issue">
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
        <Button/>
      </div>
    </div>
  );
}
