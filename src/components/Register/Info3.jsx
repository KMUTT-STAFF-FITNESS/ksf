import React, { useState } from 'react';
import { Formik, Form, Field } from "formik"
import Logo from "../core/Logo"
import BtnNext from '../core/BtnNext';
import BtnBack from '../core/BtnBack';

export default function Info3() {

  const [formik, setFormik] = useState([{
    weight: '',
    heigh: '',
    disease: '',
    detailDisease: ''

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
                        id="weight"
                        name="weight"
                        type="number"
                        placeholder="น้ำหนัก"
                        onChange={formik.handleChange}
                        value={formik.values.weight}
                        className={`shadow  border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline form-control`}
                      />
                      <Field
                        id="heigh"
                        name="heigh"
                        type="number"
                        placeholder="ส่วนสูง"
                        onChange={formik.handleChange}
                        value={formik.values.heigh}
                        className={`shadow  border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline form-control`}
                      />
                      <Field
                        id="disease"
                        name="disease"
                        type="text"
                        placeholder="โรคประจำตัว"
                        onChange={formik.handleChange}
                        value={formik.values.disease}
                        className={`shadow  border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline form-control `}
                      />
                      <div className="py-3">
                         <p class="text-gray-700 text-lg font-bold">
                        เคยเบิกประกันหรือไม่
                      </p>

                      <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" />
                        <label className="custom-control-label" for="customRadioInline1">เคย</label>
                      </div>
                      <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input " />
                        <label className="custom-control-label" for="customRadioInline2">ไม่เคย</label>
                      </div>
                      </div>
                     
                      <div className="py-3">
                        <p className="text-gray-700 text-md font-bold px-4  mb-4">ถ้าเคยเบิก</p>
                      <Field
                        id="disease"
                        name="disease"
                        type="text"
                        placeholder="เช่น ปวดหลัง"
                        onChange={formik.handleChange}
                        value={formik.values.telNo}
                        className={`shadow  border border-gray-400 rounded w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline form-control `}
                      />
                      </div>
                      
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



