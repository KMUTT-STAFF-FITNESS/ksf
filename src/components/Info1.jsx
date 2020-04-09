import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik"
import Logo from "./core/Logo"
import BtnNext from './core/BtnNext';

export default function Info1() {

    const [formik, setFormik] = useState([{
        firstName: '',
        lastName: '',
        dob: '',
        houseNumber:'',
        subdistrict:'',
        district:'',
        province:'',
        postalCode:'',
        tel:'',


    }]
    )

    const onSubmit = (values) => {
        alert(JSON.stringify(values, null, 2));
    }


    return (

        <div>
            <Logo />

       

        <div class="container mx-auto max-w-sm overflow-hidden py-4 rounded shadow">
            <div class="px-6 py-4">

                <p class="text-gray-700 text-base">
                    ประวัติส่วนตัว
                </p>
            </div>

            <div className=" mx-auto max-w-xs">
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                        className={`shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline form-control `}

                    />
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                        className={`shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline form-control `}

                    />
                    <div className="btn text-center">
                            <BtnNext/>
                        </div>
                </form>
            </div>
        </div>
        </div>

    )
}
