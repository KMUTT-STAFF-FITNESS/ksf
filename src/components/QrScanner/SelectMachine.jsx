import React, { useState } from "react";
import {Field,Formik } from "formik";

export default function SelectMachine() {
  const [formik, setFormik] = useState([
    {
      machine: "",
    },
  ]);

  return (
    <>
      <Formik initialValues={formik}>
        <div className=" mx-auto max-w-xs py-2">    
          <Field
            name="machine"
            as="select"
            className={`shadow border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline form-control `}
          >
            <option value="เครื่องเล่น 1">เครื่องเล่น 1</option>
            <option value="เครื่องเล่น 2">เครื่องเล่น 2</option>
            <option value="เครื่องเล่น 3">เครื่องเล่น 3</option>
          </Field>
        </div>
      </Formik>
    </>
  );
}
