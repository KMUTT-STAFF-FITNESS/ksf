import React, { useState } from 'react';
import { Formik, Form, Field } from "formik"
import Logo from "../core/Logo"
import BtnNext from '../core/BtnNext';
import BtnBack from '../core/BtnBack';


export default function Info3() {

  const [formik, setFormik] = useState([{
    houseNumber: '',
    subdistrict: '',
    district: '',
    province: '',
    postCode: ''

  }])

  return (
    <div className=" container">
      <div className="row">
        <div className="col-12">
          <Logo />
        </div>
        <div className="col-12">
          <div className=" text-center mx-auto">
            <div class="mx-auto max-w-sm overflow-hidden py-4 rounded shadow">
                <p class="text-gray-700 text-lg font-bold">
                  ประวัติส่วนตัว
                </p>
              <Formik>
                <Form>
                  <div className=" mx-auto max-w-xs py-2">
                    <form onSubmit={formik.handleSubmit}>
                      <Field
                        id="houseNumber"
                        name="houseNumber"
                        type="text"
                        placeholder="บ้านเลขที่ ถนน ซอย"
                        onChange={formik.handleChange}
                        value={formik.values.houseNumber}
                        className={`shadow  border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline form-control `}
                      />
                      <Field
                        id="subdistrict"
                        name="subdistrict"
                        type="text"
                        placeholder="แขวง"
                        onChange={formik.handleChange}
                        value={formik.values.subdistrict}
                        className={`shadow  border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline form-control `}
                      />
                      <Field
                        id="district"
                        name="district"
                        type="text"
                        placeholder="เขต"
                        onChange={formik.handleChange}
                        value={formik.values.district}
                        className={`shadow border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline form-control `}
                      />
                      <Field
                        id="province"
                        name="province"
                        placeholder="จังหวัด"
                        onChange={formik.handleChange}
                        value={formik.values.province}
                        className={`shadow border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline form-control `}
                      />
                      <Field
                        id="postCode"
                        name="postCode"
                        placeholder="รหัสไปรษณี"
                        onChange={formik.handleChange}
                        value={formik.values.postCode}
                        className={`shadow border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline form-control `}
                      />
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