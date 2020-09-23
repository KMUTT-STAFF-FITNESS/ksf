import React from "react";
import { Field, Formik } from "formik";
import Input from "../../components/core/Input";

export default function RegisterManageEdit() {
  const [editUserInfo, setEditUserInfo] = useState([
    {
      firstName: "",
      lastName: "",
      telNo: "",
      dob: "",
      gender: "",
      department: "",
      houseNumber: "",
      subdistrict: "",
      district: "",
      province: "",
      postCode: "",
    },
  ]);
  return (
    <Formik initialValues={editUserInfo}>
      <Field name="firstName">
        {({ field, meta }) => (
          <div>
            <Input placeholder="ชื่อ" inputProps={{ ...field }} />
          </div>
        )}
      </Field>
      <Field name="lastName">
        {({ field, meta }) => (
          <div>
            <Input placeholder="นามสกุล" inputProps={{ ...field }} />
          </div>
        )}
      </Field>
      <Field name="telNo">
        {({ field, meta }) => (
          <div>
            <Input placeholder="เบอร์โทร" inputProps={{ ...field }} />
          </div>
        )}
      </Field>
      <Field name="dob">
        {({ field, meta }) => (
          <div>
            <Input placeholder="DD/MM/YYYY" inputProps={{ ...field }} />
          </div>
        )}
      </Field>
      <Field
        name="gender"
        as="select"
        className={`shadow border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline form-control `}
      >
        <option value="male">ชาย</option>
        <option value="female">หญิง</option>
        <option value="non">ไม่ระบุ</option>
      </Field>
      <Field name="department">
        {({ field, meta }) => (
          <div>
            <Input placeholder="สังกัด/หน่วยงาน" inputProps={{ ...field }} />
          </div>
        )}
      </Field>

      <Field name="houseNumber">
        {({ field, meta }) => (
          <div>
            <Input placeholder="บ้านเลขที่ ถนน ซอย" inputProps={{ ...field }} />
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
    </Formik>
  );
}
