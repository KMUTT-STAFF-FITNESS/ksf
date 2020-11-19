import React, { useState } from "react";
import QrPage from "../components/QrScanner/QrScan";
import HowToPlay from "../components/QrScanner/HowToPlay";
import Logo from "../components/core/Logo";
import { Stepper, Step, StepLabel } from "@material-ui/core";
import StepConnector from "@material-ui/core/StepConnector";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Formik } from "formik";
import { navigate } from "@reach/router";
import BtnBack from "../components/core/BtnBack";
import BtnNext from "../components/core/BtnNext";

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
  return ["QrScanner", "HowToPlay"];
}

export default function QrScan() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  function handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <div className="max-w-screen-xl mx-auto min-h-screen">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Logo />
          </div>
          <div className="col-12">
            <div className="text-center mx-auto">
              <div className="p-3 w-full lg:w-1/3 overflow-y-scroll py-4 rounded shadow mx-auto">
                {activeStep === 0 && <QrPage />}
                {activeStep === 1 && <HowToPlay />}
              </div>
            </div>
            <div className="col-12 col-sm-8 col-md-8 col-lg-4 mx-auto my-3">
              {activeStep !== steps.length - 1 ? (
                <div className="row">
                  <div className="col-6 text-center">
                    <BtnBack
                      className="buttonBack"
                      disabled={activeStep === 0}
                      onClick={() => navigate("/home")}
                      text="Back"
                    />
                  </div>
                  <div className="col-6 text-center">
                    <BtnNext
                      className="buttonLogin"
                      onClick={() => navigate("/howtoplay")}
                      text="Next"
                    />
                  </div>
                </div>
              ) : (
                <div className="row">
                  <div className="col-12 text-center">
                    <BtnNext
                      className="buttonLogin"
                      onClick={handleNext}
                      text="Done"
                    >
                      Done
                    </BtnNext>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
