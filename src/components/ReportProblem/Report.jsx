import React,{useState} from "react";
import { Field, Formik } from "formik";
import Input from "../core/Input"

export default function Report() {
    const [ReportText, setReportText] = useState("")
  return (
    <div>
      
          <div className="col-12">
          <p className="text-gray-700 text-lg font-bold ">รายงานปัญหา</p>
      <Formik initialValues={ReportText}>
        <div className=" mx-auto max-w-xs py-2">
          
       
          <Field
            name="gender"
            as="select"
            className={`shadow border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline form-control `}
          >
            <option value="male">-เลือกเครื่องออกกำลังกาย-</option>
            <option value="male">ลู่วิ่ง</option>
            <option value="female">จักรยาน</option>
            <option value="non">อื่นๆ</option>
          </Field>
          <Field
            name="gender"
            placeholder="-เลือกปัญหา-"
            as="select"
            className={`shadow border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline form-control `}
          >
            <option value="male">-เลือกปัญหา-</option>
            <option value="male">ลู่วิ่ง</option>
            <option value="female">จักรยาน</option>
            <option value="non">อื่นๆ</option>
          </Field>
        </div>
      </Formik>
          </div>
        </div>
     
  );
}
