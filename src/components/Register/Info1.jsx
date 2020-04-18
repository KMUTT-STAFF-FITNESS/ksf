import React, { useState } from "react";
import { Formik, Form, Field } from "formik";

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
    },
  ]);

  return (
    <>
      <p className="text-gray-700 text-lg font-bold ">ประวัติส่วนตัว</p>
      <Formik>
        <Form>
          <div className=" mx-auto max-w-xs py-2">
            <form onSubmit={formik.handleSubmit}>
              <Field
                id="firstName"
                name="firstName"
                type="text"
                placeholder="ชื่อ"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                className={`shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline form-control `}
              />
              <Field
                id="lastName"
                name="lastName"
                type="text"
                placeholder="นามสกุล"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                className={`shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline form-control `}
              />
              <Field
                id="telNo"
                name="telNo"
                type="number"
                placeholder="เบอร์โทร"
                onChange={formik.handleChange}
                value={formik.values.telNo}
                className={`shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline form-control `}
              />
              <Field
                id="dob"
                name="dob"
                placeholder="DD/MM/YYYY"
                onChange={formik.handleChange}
                value={formik.values.dob}
                className={`shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline form-control `}
              />
              <Field
                id="gender"
                name="gender"
                as="select"
                onChange={formik.handleChange}
                value={formik.values.gender}
                className={`shadow border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline form-control `}
              >
                <option value="male">ชาย</option>
                <option value="female">หญิง</option>
                <option value="non">ไม่ระบุ</option>
              </Field>
            </form>
          </div>
        </Form>
      </Formik>
    </>
  );
}
