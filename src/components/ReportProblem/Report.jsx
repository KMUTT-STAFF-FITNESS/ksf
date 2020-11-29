import React from "react";
import { Field } from "formik";
import Input from "../core/Input";
import Select from "react-select";

export default function Report(props) {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="col-12">
        <p className="text-gray-700 text-lg font-bold ">รายงานปัญหา</p>
        <div className=" mx-auto max-w-xs max-h-screen py-2">
          <Field name="temp">
            {({ field, meta }) => (
              <Select
                options={field.value}
                defaultValue={field.value[0]}
                className="my-2"
                name="selectMachine"
              />
            )}
          </Field>

          <Field name="selectIssue">
            {({ field, meta }) => (
              <Input inputProps={{ ...field }} placeholder="ปัญหาที่พบ" />
            )}
          </Field>
        </div>
      </div>
    </div>
  );
}
