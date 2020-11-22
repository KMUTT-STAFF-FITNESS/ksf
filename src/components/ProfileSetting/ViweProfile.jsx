import React, { useCallback, useContext, useEffect, useState } from "react";
import ImageProfile from "../core/ImageProfile";
import { Formik, Form, Field } from "formik";
import BtnBack from "../core/BtnBack";
import BtnSave from "../core/BtnNext";
import { navigate } from "@reach/router";
import { storesContext } from "../../context";
import { apiFetchUserByUserId, apiUpdateProfile } from "../../api/users";
import Loading from "../core/Loading";
import Input from "../core/Input";
import ErrorModal from "../core/Modal/ErrorModal";
import CreateSuccessModal from "../core/Modal/CreateSuccessModal";

export default function Home() {
  const [memberCard, setMemberCard] = useState();
  const { authenticationStore } = useContext(storesContext);
  const [isFetch, setIsFetch] = useState(false);
  const [id, setId] = useState();
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const fetchData = useCallback(async () => {
    setIsFetch(true);
    const { data } = await apiFetchUserByUserId(
      authenticationStore.currentUserId
    );
    setId(authenticationStore.currentUserId);
    setMemberCard(data);
    setIsFetch(false);
  }, [authenticationStore]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isFetch) {
    return (
      <div className="flex flex-col flex-1 min-h-screen">
        <Loading />
      </div>
    );
  }

  const handleSubmit = async (data) => {
    try {
      const temp = {
        tel_no: data.tel_no,
        weight: data.weight,
        height: data.height,
        disease: data.disease,
      };
      await apiUpdateProfile(temp, id);
      setIsSuccess(true);
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } catch (err) {
      setIsError(true);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto min-h-screen">
      <ErrorModal open={isError} onClose={() => setIsError(false)} />
      <CreateSuccessModal
        open={isSuccess}
        onClose={() => setIsSuccess(false)}
      />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Formik initialValues={memberCard} onSubmit={handleSubmit}>
              {(fromikProps) => (
                <>
                  <div className="cardcolor rounded-lg m-6 lg:max-shadow mx-auto">
                    <ImageProfile />
                  </div>
                  <div className="p-3 overflow-hidden py-4 rounded shadow mx-auto">
                    <p className="text-gray-700 text-lg font-bold ">
                      แก้ไขประวัติส่วนตัว
                    </p>

                    <Form className="overflow-y-auto">
                      <div className="p-6 overflow-y-auto">
                        <Field name="fname">
                          {({ field, meta }) => (
                            <div>
                              <Input
                                inputProps={{ ...field }}
                                disabled
                                label="ชื่อ"
                              />
                            </div>
                          )}
                        </Field>
                        <Field name="lname">
                          {({ field, meta }) => (
                            <div>
                              <Input
                                inputProps={{ ...field }}
                                disabled
                                label="นามสกุล"
                              />
                            </div>
                          )}
                        </Field>
                        <Field name="email">
                          {({ field, meta }) => (
                            <div>
                              <Input
                                inputProps={{ ...field }}
                                disabled
                                label="E-mail"
                              />
                            </div>
                          )}
                        </Field>
                        <Field name="tel_no">
                          {({ field, meta }) => (
                            <div>
                              <Input
                                inputProps={{ ...field }}
                                label="เบอร์โทร"
                              />
                            </div>
                          )}
                        </Field>
                        <Field name="member_type">
                          {({ field, meta }) => (
                            <div>
                              <Input
                                inputProps={{ ...field }}
                                disabled
                                label="ประเภทสมาชิก"
                              />
                            </div>
                          )}
                        </Field>
                        <Field name="weight">
                          {({ field, meta }) => (
                            <div>
                              <Input
                                inputProps={{ ...field }}
                                label="น้ำหนัก"
                              />
                            </div>
                          )}
                        </Field>
                        <Field name="height">
                          {({ field, meta }) => (
                            <div>
                              <Input
                                inputProps={{ ...field }}
                                label="ส่วนสูง"
                              />
                            </div>
                          )}
                        </Field>
                        <Field name="disease">
                          {({ field, meta }) => (
                            <div>
                              <Input
                                inputProps={{ ...field }}
                                label="โรคประจำตัว"
                              />
                            </div>
                          )}
                        </Field>
                      </div>
                    </Form>
                  </div>
                  <div className="row">
                    <div className="col-4 py-4 ml-auto">
                      <BtnBack text="Back" onClick={() => navigate("/home")} />
                    </div>
                    <div className="col-4 py-4 mr-auto">
                      <BtnSave text="Update" onClick={fromikProps.submitForm} />
                    </div>
                  </div>
                </>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
