import React, { useState } from "react";
import { Field, Formik, Form } from "formik";
import Input from "../../components/core/Input";
import BtnSubmit from "../../components/core/BtnBack";
import { apiCreateNotification } from "../../api/notification";
import EditHeader from "../../components/Header/EditHeader";
import { Helmet } from "react-helmet";
export default function CreateNoti() {
  const [notification, setNotification] = useState({
    message_title: "",
    content: "",
    author: "Admin_001",
  });

  const handleSubmit = async (data) => {
    const body = {
      message_title: data.message_title,
      content: data.content,
      author: data.author,
    };
    await apiCreateNotification(body);
  };

  return (
    <div className="flex flex-col flex-1">
      <Helmet>
        <title>จัดการข่าวสาร</title>
      </Helmet>

      <Formik initialValues={notification} onSubmit={handleSubmit}>
        {(formikProps) => (
          <>
            <EditHeader title="กรอกข่าวสาร" />
            <Form className="overflow-y-auto">
              <div className="p-6 overflow-y-auto">
                <Field name="message_title">
                  {({ field, meta }) => (
                    <div>
                      <Input
                        placeholder="กรอกหัวข้อ"
                        inputProps={{ ...field }}
                      />
                    </div>
                  )}
                </Field>
                <Field name="content">
                  {({ field, meta }) => (
                    <div>
                      <Input
                        placeholder="กรอกเนื้อหา"
                        inputProps={{ ...field }}
                      />
                    </div>
                  )}
                </Field>
                <div className="col-4 mx-auto">
                  <button value="submit" className="buttonBack btn-block">
                    Submit
                  </button>
                </div>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
}
