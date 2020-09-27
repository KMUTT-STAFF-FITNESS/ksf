import React, { useCallback, useEffect, useState } from "react";
import ReportInput from "../components/ReportProblem/Report";
import Logo from "../components/core/Logo";
import BtnNext from "../components/core/BtnNext";
import BtnBack from "../components/core/BtnBack";
import { navigate } from "@reach/router";
import { apiCreateReportProblem, apiFetchReportTemplate } from "../api/report";
import { apiFetchMachine } from "../api/machine";
import { Form, Formik } from "formik";

export default function ReportProblem() {
  const [ReportText, setReportText] = useState({
    selectMachine: "1",
    selectIssue: "",
    otherIssue: "",
  });
  const [machine, setMachine] = useState();
  const [defalutVal, setDefalutVal] = useState();
  const [problemTemplate, setProblemTemplate] = useState();
  const [isFetch, setIsFetch] = useState(false);

  function handleSubmit() {
    if (ReportText.selectMachine != null && ReportText.selectIssue != null) {
      if (ReportText.selectIssue === "issue3") {
        if (ReportText.otherIssue != null) {
          console.log(ReportText.otherIssue);
          apiCreateReportProblem(ReportText);
        } else {
          alert("กรุณากรอกข้อความให้เรียบร้อย2");
        }
      }
    } else {
      alert("กรุณากรอกข้อความให้เรียบร้อย1");
    }
  }

  const fetchData = useCallback(async () => {
    setIsFetch(true);
    const { data } = await apiFetchMachine();
    const template = await apiFetchReportTemplate(ReportText.selectMachine);
    const temp = [];
    for (let i = 0; i < data.length; i++) {
      temp.push({
        value: data[i].machine_group_id,
        label: data[i].machine_name,
      });
    }

    const problem = [];

    for (let j = 0; j < template.data.length; j++) {
      problem.push({
        value: template.data[j].problem_temp_id,
        label: template.data[j].message,
      });
    }

    problem.push({
      value: "issue3",
      label: "อื่นๆ",
    });
    setProblemTemplate(problem);
    setDefalutVal(temp[0]);
    setMachine(temp);
    setIsFetch(false);
  }, [ReportText]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isFetch) {
    return <div>wait....</div>;
  }
  return (
    <div className="max-w-screen-xl mx-auto min-h-screen">
      <Formik initialValues={ReportText} onSubmit={handleSubmit}>
        {(formikProps) => (
          <Form className="overflow-y-auto min-h-screen">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <Logo />
                </div>
                <div className="p-3 w-full lg:w-1/3  py-4 rounded shadow mx-auto">
                  <ReportInput
                    reportText={ReportText}
                    setReportText={setReportText}
                    machine={machine}
                    defalutVal={defalutVal}
                    problemTemplate={problemTemplate}
                  />
                </div>
              </div>

              <div className="w-full lg:w-1/3 overflow-x-hidden py-4 mx-auto">
                <div className="row">
                  <div className="col-6 py-4">
                    <BtnBack text="Back" onClick={() => navigate("/home")} />
                  </div>
                  <div className="col-6 py-4">
                    <BtnNext text="Submit" onClick={() => handleSubmit()} />
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
