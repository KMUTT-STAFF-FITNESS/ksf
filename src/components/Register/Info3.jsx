import React from "react";
import { Field } from "formik";
import Input from "../core/Input";

export default function Info3() {
  return (
    <>
      <p className="text-gray-700 text-lg font-bold">ข้อมูลสุขภาพ</p>
      <div className=" mx-auto max-w-xs py-2">
        <Field name="weight">
          {({ field, meta }) => (
            <div>
              <Input placeholder="น้ำหนัก" inputProps={{ ...field }} />
            </div>
          )}
        </Field>
        <Field name="height">
          {({ field, meta }) => (
            <div>
              <Input placeholder="ส่วนสูง" inputProps={{ ...field }} />
            </div>
          )}
        </Field>
        <Field name="disease">
          {({ field, meta }) => (
            <div>
              <Input placeholder="โรคประจำตัว" inputProps={{ ...field }} />
            </div>
          )}
        </Field>
        <div className="py-3">
          <p className="text-gray-700 text-lg font-bold">
            เคยเบิกประกันหรือไม่
          </p>

          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              id="customRadioInline1"
              name="customRadioInline1"
              className="custom-control-input"
            />
            <label className="custom-control-label" for="customRadioInline1">
              เคย
            </label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              id="customRadioInline2"
              name="customRadioInline1"
              className="custom-control-input "
            />
            <label className="custom-control-label" for="customRadioInline2">
              ไม่เคย
            </label>
          </div>
        </div>

        <div className="py-3">
          <p className="text-gray-700 text-md font-bold px-4  mb-4">
            ถ้าเคยเบิก
          </p>
          <Field name="disease_detail">
            {({ field, meta }) => (
              <div>
                <Input placeholder="เช่น ปวดหลัง" inputProps={{ ...field }} />
              </div>
            )}
          </Field>
        </div>
      </div>
    </>
  );
}
