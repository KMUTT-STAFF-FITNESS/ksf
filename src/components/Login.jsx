import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik"
import Logo from './core/Logo'
import BtnNext from './core/BtnNext'

export default function Login() {
    const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    return (
        <div class="container mx-auto">
            <Logo />
            <Formik
                initialValues={{ email: "", password: "" }}
                validate={values => {
                    let errors = {};
                    if (values.email === "") {
                        errors.email = "Email is required";
                    } else if (!emailTest.test(values.email)) {
                        errors.email = "Invalid email address format";
                    }
                    if (values.password === "") {
                        errors.password = "Password is required";
                    } else if (values.password.length < 3) {
                        errors.password = "Password must be 3 characters at minimum";
                    }
                    return errors;
                }}
                onSubmit={({ setSubmitting }) => {
                    alert("Form is validated! Submitting the form...");
                    setSubmitting(false);
                }}
            >
                {({ touched, errors, isSubmitting }) => (
                    <Form>
                        <div class="form-group mx-auto mb-4  max-w-xs">
                            
                            <Field
                                type="email"
                                name="email"
                                placeholder="example@mail.kmutt.ac.th"
                                className={`shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline form-control ${
                                touched.email && errors.email ? "is-invalid" : ""
                                }`}
                            />
                            <ErrorMessage
                                component="div"
                                name="email"
                                className="invalid-feedback"
                            />
                        </div>

                        <div className=" mx-auto max-w-xs">
                            
                            <Field
                                type="password"
                                name="password"
                                
                                placeholder="******************"
                                className={`shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline form-control ${
                                touched.password && errors.password ? "is-invalid" : ""
                                }`}
                            />
                            <ErrorMessage
                                component="div"
                                name="password"
                                className="invalid-feedback"
                            />
                        </div>
                        <div className="btn text-center">
                            <BtnNext/>
                        </div>
                      

                    </Form>
                )}
            </Formik>
        </div>
    )
}
