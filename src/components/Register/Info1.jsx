import React, { useState } from "react";
import {Field,Formik } from "formik";
import Input from "../core/Input";

function getSteps() {
  return ["information", "Address", "Health", "Status", "Payment"];
}

export default function Info1() {
  const [formik, setFormik] = useState([
    {
      firstName: "",
      lastName: "",
      telNo: "",
      dob: "",
      gender: "",
      department: "",
    },
  ]);

  return (
    <>
      <p className="text-gray-700 text-lg font-bold ">ประวัติส่วนตัว</p>
      <Formik initialValues={formik}>
        <div className=" mx-auto max-w-xs py-2">
          <Field name="firstName">
            {({ field, meta }) => (
              <div>
                <Input placeholder="ชื่อ" inputProps={{ ...field }} />
              </div>
            )}
          </Field>
          <Field name="lastName">
            {({ field, meta }) => (
              <div>
                <Input placeholder="นามสกุล" inputProps={{ ...field }} />
              </div>
            )}
          </Field>
          <Field name="telNo">
            {({ field, meta }) => (
              <div>
                <Input placeholder="เบอร์โทร" inputProps={{ ...field }} />
              </div>
            )}
          </Field>
          <Field name="dob">
            {({ field, meta }) => (
              <div>
                <Input placeholder="DD/MM/YYYY" inputProps={{ ...field }} />
              </div>
            )}
          </Field>
          <Field
            name="gender"
            as="select"
            className={`shadow border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline form-control `}
          >
            <option value="male">ชาย</option>
            <option value="female">หญิง</option>
            <option value="non">ไม่ระบุ</option>
          </Field>
          <Field name="department">
            {({ field, meta }) => (
              <div>
                <Input placeholder="สังกัด/หน่วยงาน" inputProps={{ ...field }} />
              </div>
            )}
          </Field>
        </div>
      </Formik>
    </>
  );
}
