import React from 'react'
import {Field,Formik } from "formik"

export default function RegisterManageEdit() {

    const [editUserInfo, setEditUserInfo] = useState([
        {
            firstName: "",
            lastName: "",
            telNo: "",
            dob: "",
            gender: "",
            department: "",
        }
    ])
    return (
        <Formik initialValues={editUserInfo}>
            <Field name = 'firstName'>
                
            </Field>
            <Formik initialValues={formik}>
        
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
        
      </Formik>
        </Formik>
    )
}
