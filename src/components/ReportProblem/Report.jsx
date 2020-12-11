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
          <Field name="selectMachine">
            {({ field, meta }) => (
              <Select
                options={props.machine}
                defaultValue={props.defalutVal}
                onChange={(option) =>
                  props.setReportText({
                    ...props.ReportText,
                    selectMachine: option.value,
                  })
                }
                className="my-2"
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
