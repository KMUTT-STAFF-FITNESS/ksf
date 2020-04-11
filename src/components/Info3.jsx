import React, { useState } from 'react';
import { Formik, Form, Field } from "formik"
import Logo from "./core/Logo"
import BtnNext from './core/BtnNext';
import BtnBack from './core/BtnBack';


export default function Info3() {

    const [formik, setFormik] = useState([{
        weight: '',
        heigh: '',
        disease: '',
        detailDisease: ''  

    }])

    return (
      
        <div className=" mx-auto max-w-sm  ">
            <Logo />



            <div class="container mx-auto max-w-sm overflow-hidden py-4 rounded shadow">
                <div class="px-6 py-4">

                    <p class="text-gray-700 text-lg font-bold">
                        ประวัติส่วนตัว
                </p>
                </div>
                <Formik>
                    <Form>
                        <div className=" mx-auto max-w-xs py-5">
                            <form onSubmit={formik.handleSubmit}>

                                <Field
                                    id="weight"
                                    name="weight"
                                    type="number"
                                    placeholder="น้ำหนัก"
                                    onChange={formik.handleChange}
                                    value={formik.values.weight}
                                    className={`shadow  border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline form-control `}

                                />

                                <Field
                                    id="heigh"
                                    name="heigh"
                                    type="number"
                                    placeholder="ส่วนสูง"
                                    onChange={formik.handleChange}
                                    value={formik.values.heigh}
                                    className={`shadow  border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline `}

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
                                
                                <p class="text-gray-700 text-lg font-bold">
                                    เคยเบิกประกันหรือไม่
                                </p>
                                
                                <div class=" flex m-5 ">
                                   <Field
                                    id="Yes"
                                    name="Yes"
                                    type="radio"
                                    className={`shadow  border border-gray-400 rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline form-control `}
                                    /> 
                                    <p class="text-gray-700 text-lg font-bold px-4">เคย</p>
                                    <Field
                                    id="No"
                                    name="No"
                                    type="radio"
                                    className={`shadow  border border-gray-400 rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline form-control `}
                                    /> 
                                    <p class="text-gray-700 text-lg font-bold px-4">ไม่เคย</p>
                                </div>

                                <p class="text-gray-700 text-md font-bold px-4">ถ้าเคยเบิก</p>
                                <Field
                                    id="disease"
                                    name="disease"
                                    type="text"
                                    placeholder="เช่น ปวดหลัง"
                                    onChange={formik.handleChange}
                                    value={formik.values.telNo}
                                    className={`shadow  border border-gray-400 rounded w-full py-10 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline form-control `}

                                />
                              


                            </form>
                        </div>
                    </Form>
                </Formik>
            </div>
            <div className="flex mx-auto">

                <div class="m-4 py-4 px-2">
                    <BtnBack />
                </div>
                <div class="m-4 py-4 px-2">
                    <BtnNext />
                </div>

            </div>
        </div>
    )
}



