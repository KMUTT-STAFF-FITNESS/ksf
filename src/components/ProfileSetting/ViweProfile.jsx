import React, { useState } from "react";
import ImageProfile from "../core/ImageProfile";
import { Formik, Form, Field } from "formik";
import BtnBack from "../core/BtnBack";
import BtnSave from "../core/BtnNext";
import { navigate } from "@reach/router";

export default function Home() {
  const [Information, setInformation] = useState({
    fname: "Sarinrat",
    lname: "Charoenkunasit",
    email: "sarinrat@gmail.com",
    gender: "female",
    telNo: "0949965661",
    weight: "50",
    heigh: "160",
    status: "Year",
  });

  const onEdit = (e) => {
    setInformation({});
  };

  return (
    <div className="max-w-screen-xl mx-auto min-h-screen">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cardcolor rounded-lg m-6 lg:max-shadow mx-auto">
              <ImageProfile />
              <p className="text-white text-lg font-bold text-center m-4 ">
                Status: {Information.status}
              </p>
            </div>
            <div className="p-3 overflow-hidden py-4 rounded shadow mx-auto">
              <p className="text-gray-700 text-lg font-bold ">
                แก้ไขประวัติส่วนตัว
              </p>
              <Formik>
                <Form>
                  <div className="row">
                    <p className="col-3 text-gray-700 text-sm m-2 px-2">
                      ชื่อ:
                    </p>
                    <div className="col-8">
                      <Field
                        value={Information.fname}
                        className={`shadow appearance-none border rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline form-control `}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row">
                    <p className="col-3 text-gray-700 text-sm m-2 px-2">
                      สกุล:
                    </p>
                    <div className="col-8">
                      <Field
                        value={Information.lname}
                        className={` shadow appearance-none border rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline form-control `}
                        disabled
                      ></Field>
                    </div>
                  </div>
                  <div className="row ">
                    <p className="col-3 text-gray-700 text-sm m-2 px-2">
                      e-mail:
                    </p>
                    <div className="col-8">
                      <Field
                        value={Information.email}
                        className={`shadow appearance-none border  rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline form-control `}
                        disabled
                      ></Field>
                    </div>
                  </div>
                  <div className="row">
                    <p className="col-3 text-gray-700 text-sm m-2 px-2">เพศ:</p>
                    <div className="col-8">
                      <Field
                        value={Information.gender}
                        className={`shadow appearance-none border rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline form-control `}
                        disabled
                      ></Field>
                    </div>
                  </div>
                  <div className="row">
                    <p className="col-3 text-gray-700 text-sm m-2 px-2">
                      เบอร์โทร:
                    </p>
                    <div className="col-8">
                      <Field
                        value={Information.telNo}
                        type="number"
                        className={`shadow appearance-none border rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline form-control `}
                      ></Field>
                    </div>
                  </div>
                  <div className="row">
                    <p className="col-3 text-gray-700 text-sm m-2 px-2">
                      น้ำหนัก:
                    </p>
                    <div className="col-8">
                      <Field
                        value={Information.weight}
                        type="number"
                        className={`shadow appearance-none border rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline form-control `}
                      ></Field>
                    </div>
                  </div>
                  <div className="row">
                    <p className="col-3 text-gray-700 text-sm m-2 px-2">
                      ส่วนสูง:
                    </p>
                    <div className="col-8">
                      <Field
                        value={Information.heigh}
                        type="number"
                        className={`shadow appearance-none border rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline form-control `}
                      ></Field>
                    </div>
                  </div>
                </Form>
              </Formik>
            </div>
            <div className="row">
              <div className="col-4 py-4 ml-auto">
                <BtnBack text="Back" onClick={() => navigate("/home")} />
              </div>
              <div className="col-4 py-4 mr-auto">
                <BtnSave text="Update" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
