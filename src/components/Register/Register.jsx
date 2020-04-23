import React, { useState } from "react";
import Info1 from "./Info1";
import Info2 from "./Info2";
import Info3 from "./Info3";
import StatusType from "./StatusType";
import Pdpa from "./Pdpa";
import Logo from "../core/Logo";
import QRPayment from "./QRPayment";
import Upload from "./Upload";
import Complete from "./Complete";
import { Stepper, Step, StepLabel, Button } from "@material-ui/core";

function getSteps() {
  return ["information", "Address", "Health", "Status", "Payment", "Upload","Finish"];
}

export default function Register() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  function handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Logo />
        </div>
        <div className="col-12">
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div className="text-center mx-auto">
            <div className="p-3 w-full lg:w-1/3 overflow-hidden py-4 rounded shadow mx-auto">
              {activeStep === 0 && <Info1 />}
              {activeStep === 1 && <Info2 />}
              {activeStep === 2 && <Info3 />}
              {activeStep === 3 && <StatusType />}
              { activeStep === 4 &&  <QRPayment />}
              { activeStep === 5 &&  <Upload />}
              { activeStep === 6 &&  <Complete />}
            </div>
          </div>
          <div className="col-12 col-sm-8 col-md-8 col-lg-4 mx-auto my-3">
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
                  onClick={handleNext}
                  // text={activeStep === steps.length - 1 ? "Submit" : "Next"}
                >
                  {activeStep === steps.length - 1 ? "DONE" : "Next"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
