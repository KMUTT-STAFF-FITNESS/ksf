import React, { useCallback, useContext, useEffect, useState } from "react";
import Info1 from "../components/Register/Info1";
import Info2 from "../components/Register/Info2";
import Info3 from "../components/Register/Info3";
import StatusType from "../components/Register/StatusType";
import Logo from "../components/core/Logo";
import Complete from "../components/Register/Complete";
import { Stepper, Step, StepLabel, Button } from "@material-ui/core";
import StepConnector from "@material-ui/core/StepConnector";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Form, Formik } from "formik";
import { apiCreateUser } from "../api/users";
import { apiFetchMemberType } from "../api/membertype";
import Pdpa from "../components/Register/Pdpa";
import { navigate } from "@reach/router";
import SumProfile from "../components/Register/SumProfile";
import Loading from "../components/core/Loading";
import { storesContext } from "../context";

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundImage:
      "linear-gradient(to top right, #192527 -17%, #c2691c 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage:
      "linear-gradient(to top right, #192527 -17%, #c2691c 100%)",
  },
});

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundImage: "linear-gradient(to right, #192527 0%, #c2691c 100%)",
    },
  },
  completed: {
    "& $line": {
      backgroundImage: "linear-gradient(to right, #192527 0%, #c2691c 100%)",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

function getSteps() {
  return [
    "Pdpa",
    "Information",
    "Address",
    "Health",
    "Status",
    "Profile",
    "Finish",
  ];
}

export default function Register() {
  const { authenticationStore } = useContext(storesContext);
  const classes = useColorlibStepIconStyles();
  const [user, setUser] = useState();

  const [profile, setProfile] = useState();
  const [memberType, setMemberType] = useState();
  const [selectType, setSelectType] = useState("");
  const [isFetch, setIsFetch] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const fetchData = useCallback(async () => {
    setIsFetch(true);
    const res = await authenticationStore.me();
    const { data } = await apiFetchMemberType();

    const name = res.name_th.split(" ");
    const first_name = name[0].split("นาย")
    console.log("data", res)
    console.log("name split", first_name);

    const temp = {
      fname: name[0],
      lname: name[1],
      dob: "",
      email: res.email,
      gender: "male",
      tel_no: "",
      department: "",
      home_address: {
        houseNumber: "",
        subdistrict: "",
        district: "",
        province: "",
        postCode: "",
      },
      weight: "",
      height: "",
      disease: "",
      disease_detail: "",
      role_id: "3",
      member_type_id: "",
    };
    setMemberType(data);
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

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  function handleBack() {
    if (activeStep === 0) {
      navigate("/");
    }
    setActiveStep(activeStep - 1);
  }

  const handleSubmit = async (data) => {
    const temp = {
      fname: data.fname,
      lname: data.lname,
      dob: data.dob,
      email: data.email,
      gender: data.gender,
      tel_no: data.tel_no,
      department: data.department,
      weight: data.weight,
      height: data.height,
      disease: data.disease,
      disease_detail: data.disease_detail,
      role_id: data.role_id,
      address:
        data.home_address.houseNumber +
        " " +
        data.home_address.subdistrict +
        " " +
        data.home_address.district +
        " " +
        data.home_address.province +
        " " +
        data.home_address.postCode,
      member_type_id: selectType,
    };
    await apiCreateUser(temp);
    handleNext();
  };

  return (
    <div className="max-w-screen-xl mx-auto min-h-screen">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {console.log("me/regis", user)}
            <Logo />
          </div>
          <div className="col-12">
            <Stepper
              connector={<ColorlibConnector />}
              activeStep={activeStep}
              alternativeLabel
              classes
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel></StepLabel>
                </Step>
              ))}
            </Stepper>
            <Formik initialValues={profile} onSubmit={handleSubmit}>
              {(formikProps) => (
                <Form className="overflow-y-auto">
                  <div className="text-center mx-auto">
                    <div className="p-3 w-full overflow-hidden py-4 rounded mx-auto">
                      {activeStep === 0 && <Pdpa />}
                      {activeStep === 1 && <Info1 />}
                      {activeStep === 2 && <Info2 />}
                      {activeStep === 3 && <Info3 />}
                      {activeStep === 4 && (
                        <StatusType
                          type={memberType}
                          setSelectType={setSelectType}
                          selectType={selectType}
                        />
                      )}
                      {activeStep === 5 && <SumProfile />}

                      {activeStep === 6 && <Complete />}
                    </div>
                  </div>
                  <div className="p-3 w-full  overflow-hidden py-4 rounded  mx-auto">
                    {activeStep !== steps.length - 1 ? ( //check ค่าว่า activestep มีค่าไม่เทากับ ความยาว steps ละให้ render next/back ออกมา มันคือ if else แบบ short hand
                      <div className="row">
                        <div className="col-6 text-center">
                          <Button
                            className="buttonBack"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            text="Back"
                          >
                            Back
                          </Button>
                        </div>
                        <div className="col-6 text-center">
                          <Button
                            className="buttonLogin"
                            onClick={
                              activeStep === 5
                                ? formikProps.submitForm
                                : handleNext
                            }
                            // text={activeStep === steps.length - 1 ? "Submit" : "Next"}
                          >
                            Next
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="row">
                        <div className="col-12 text-center">
                          <Button
                            className="buttonLogin"
                            onClick={handleBack}
                            // text={activeStep === steps.length - 1 ? "Submit" : "Next"}
                          >
                            Back
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
