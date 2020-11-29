import React, { useCallback, useEffect, useState } from "react";
import ReportInput from "../components/ReportProblem/Report";
import Logo from "../components/core/Logo";
import BtnNext from "../components/core/BtnNext";
import BtnBack from "../components/core/BtnBack";
import { navigate } from "@reach/router";
import { apiCreateReportProblem } from "../api/report";
import { apiFetchMachine } from "../api/machine";
import { Form, Formik } from "formik";
import Loading from "../components/core/Loading";
import ErrorModal from "../components/core/Modal/ErrorModal";
import CreateSuccessModal from "../components/core/Modal/CreateSuccessModal";

export default function ReportProblem() {
  const [ReportText, setReportText] = useState({
    selectMachine: "1",
    selectIssue: "",
  });
  const [machine, setMachine] = useState();
  const [defalutVal, setDefalutVal] = useState();
  const [isFetch, setIsFetch] = useState(false);
  const [isOpenErrorModal, setIsOpenErrorModal] = useState(false);
  const [isOpenSuccess, setIsOpenSuccess] = useState(false);

  const handleSubmit = async (data) => {
    if (data.selectIssue === "") {
      setIsOpenErrorModal(true);
      return;
    }
    console.log(data);
    const temp = {
      machine_id: data.selectMachine,
      report_message: data.selectIssue,
    };
    try {
      await apiCreateReportProblem(temp);
      setIsOpenSuccess(true);
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } catch (err) {
      setIsOpenErrorModal(true);
    }
  };

  const fetchData = useCallback(async () => {
    setIsFetch(true);
    const { data } = await apiFetchMachine();
    const temp = [];
    for (let i = 0; i < data.length; i++) {
      temp.push({
        value: data[i].machine_id,
        label: data[i].machine_name,
      });
    }

    setDefalutVal(temp[0]);
    setMachine({ temp, selectIssue: "" });
    setIsFetch(false);
  }, []);

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
  return (
    <div className="max-w-screen-xl mx-auto min-h-screen">
      <ErrorModal
        open={isOpenErrorModal}
        onClose={() => setIsOpenErrorModal(false)}
      />
      <CreateSuccessModal
        open={isOpenSuccess}
        onClose={() => setIsOpenSuccess(false)}
      />
      <Formik initialValues={machine} onSubmit={handleSubmit}>
        {(formikProps) => (
          <Form className="overflow-y-auto min-h-screen">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <Logo />
                </div>
                <div className="p-3 w-full lg:w-1/3  py-4 rounded shadow mx-auto">
                  <ReportInput />
                </div>
              </div>

              <div className="w-full lg:w-1/3 overflow-x-hidden py-4 mx-auto">
                <div className="row">
                  <div className="col-6 py-4">
                    <BtnBack text="Back" onClick={() => navigate("/home")} />
                  </div>
                  <div className="col-6 py-4">
                    <BtnNext text="Submit" onClick={formikProps.submitForm} />
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
