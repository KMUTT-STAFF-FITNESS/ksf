import React from "react";
import { Field } from "formik";
import Input from "../core/Input";

export default function Info3() {
  return (
    <>
      <p className="text-gray-700 text-lg font-bold">ที่อยู่</p>
      <div className=" mx-auto max-w-xs py-2">
        <Field name="home_address.houseNumber">
          {({ field, meta }) => (
            <div>
              <Input
                placeholder="บ้านเลขที่ ถนน ซอย"
                inputProps={{ ...field }}
              />
            </div>
          )}
        </Field>
        <Field name="home_address.subdistrict">
          {({ field, meta }) => (
            <div>
              <Input placeholder="แขวง/ตำบล" inputProps={{ ...field }} />
            </div>
          )}
        </Field>
        <Field name="home_address.district">
          {({ field, meta }) => (
            <div>
              <Input placeholder="เขต/อำเภอ" inputProps={{ ...field }} />
            </div>
          )}
        </Field>
        <Field name="home_address.province">
          {({ field, meta }) => (
            <div>
              <Input placeholder="จังหวัด" inputProps={{ ...field }} />
            </div>
          )}
        </Field>
        <Field name="home_address.postCode">
          {({ field, meta }) => (
            <div>
              <Input placeholder="รหัสไปรษณีย์" inputProps={{ ...field }} />
            </div>
          )}
        </Field>
      </div>
    </>
  );
}
