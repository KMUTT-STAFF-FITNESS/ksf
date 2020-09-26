import React, { useState } from "react";
import { Formik,Field } from "formik";
import Input from "../core/Input";

export default function Info3() {
  const [formik, setFormik] = useState(
    {
      houseNumber: "",
      subdistrict: "",
      district: "",
      province: "",
      postCode: "",
    },
  );

  return (
    <>
      <p className="text-gray-700 text-lg font-bold">ที่อยู่</p>
      <Formik initialValues={formik}>
        <div className=" mx-auto max-w-xs py-2">
          <Field name="houseNumber">
            {({ field, meta }) => (
              <div>
                <Input
                  placeholder="บ้านเลขที่ ถนน ซอย"
                  inputProps={{ ...field }}
                />
              </div>
            )}
          </Field>
          <Field name="subdistrict">
            {({ field, meta }) => (
              <div>
                <Input placeholder="แขวง/ตำบล" inputProps={{ ...field }} />
              </div>
            )}
          </Field>
          <Field name="district">
            {({ field, meta }) => (
              <div>
                <Input placeholder="เขต/อำเภอ" inputProps={{ ...field }} />
              </div>
            )}
          </Field>
          <Field name="province">
            {({ field, meta }) => (
              <div>
                <Input placeholder="จังหวัด" inputProps={{ ...field }} />
              </div>
            )}
          </Field>
          <Field name="postCode ">
            {({ field, meta }) => (
              <div>
                <Input placeholder="รหัสไปรษณีย์" inputProps={{ ...field }} />
              </div>
            )}
          </Field>
        </div>
      </Formik>
    </>
  );
}
