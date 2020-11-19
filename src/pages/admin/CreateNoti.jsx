import React, { useState } from "react";
import { Field, Formik, Form } from "formik";
import Input from "../../components/core/Input";
import BtnSubmit from "../../components/core/BtnBack";
import { apiCreateNotification } from "../../api/notification";
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
    <div className="w-full h-full">
      <div className="container">
        <div className="row my-4">
          <div className="col-12">
            <p className="text-gray-700 text-lg font-bold text-left">
              กรอกข่าวสาร
            </p>
            <Formik initialValues={notification} onSubmit={handleSubmit}>
              <Form>
                <Field name="message_title">
                  {({ field, meta }) => (
                    <div>
                      <Input
                        placeholder="ใส่ข้อความ"
                        inputProps={{ ...field }}
                      />
                    </div>
                  )}
                </Field>
                <Field name="content">
                  {({ field, meta }) => (
                    <div>
                      <Input
                        placeholder="ใส่ข้อความ"
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
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
