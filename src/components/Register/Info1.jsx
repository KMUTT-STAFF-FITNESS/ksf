import React, { useState } from 'react';
import { Formik, Form, Field } from "formik"
import Logo from "../core/Logo"
import BtnNext from '../core/BtnNext';
import BtnBack from '../core/BtnBack';


export default function Info1() {

  const [formik, setFormik] = useState([{
    firstName: '',
    lastName: '',
    telNo: '',
    dob: '',
    gender: ''
  }]
  )

  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Logo />
        </div>
        <div className="col-12">
          <div className="text-center mx-auto">
            <div className="max-w-sm overflow-hidden py-4 rounded shadow mx-auto">
              <p className="text-gray-700 text-lg font-bold ">
                ประวัติส่วนตัว
              </p>
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
                        <option value="male" class="w-full text-gray-700">ชาย</option>
                        <option value="female" class="w-full">หญิง</option>
                        <option value="non" class="w-full">ไม่ระบุ</option>
                      </Field>
                    </form>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
          <div className="col-12 col-sm-8 col-md-8 col-lg-4 mx-auto my-3">
            <div className="row">
              <div className="col-6 text-center">
                <BtnBack text="Back" />
              </div>
              <div className="col-6 text-center">
                <BtnNext text="Next" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}