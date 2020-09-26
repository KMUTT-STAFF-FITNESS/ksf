import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Logo from "../components/core/Logo";
import BtnNext from "../components/core/BtnNext";
import * as Yup from "yup";
import Input from "../components/core/Input";

export default function Login() {
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
    password: Yup.string()
      .min(3, "Password must be 3 characters at minimum")
      .required("Password is required"),
  });

  return (
    <div className="max-w-screen-xl mx-auto min-h-screen">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <Logo />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={LoginSchema}
              onSubmit={({ setSubmitting }) => {
                alert("Form is validated! Submitting the form...");
                setSubmitting(false);
              }}
            >
              {({ touched, errors, isSubmitting }) => (
                <Form>
                  <div className="form-group">
                    <Field
                      type="email"
                      name="email"
                      placeholder="example@mail.kmutt.ac.th"
                      className={`form-control ${
                        touched.email && errors.email ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="email"
                      className="invalid-feedback"
                    />
                  </div>

                  <div className="form-group">
                    <Field
                      type="password"
                      name="password"
                      placeholder="password"
                      className={`form-control ${
                        touched.password && errors.password ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="password"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="col-6 mx-auto">
                    <BtnNext
                      text="login"
                      className="btn btn-primary btn-block"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Please wait..." : "Submit"}
                    </BtnNext>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
