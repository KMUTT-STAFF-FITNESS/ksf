import React, { useState } from "react";
import Info1 from "./Info1";
import Info2 from "./Info2";
import Info3 from "./Info3";
import StatusType from "./StatusType";
import Logo from "../core/Logo";
import { Stepper, Step, StepLabel, Button } from "@material-ui/core";
import StepConnector from '@material-ui/core/StepConnector';
import { makeStyles,withStyles } from '@material-ui/core/styles';


const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient(to top right, #192527 -17%, #c2691c 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient(to top right, #192527 -17%, #c2691c 100%)',
  },
})



const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient(to right, #192527 0%, #c2691c 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient(to right, #192527 0%, #c2691c 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector)

function getSteps() {
  return ["information", "Address", "Health", "Status", "Payment"];
}

export default function Register() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  }

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
  <Stepper connector={<ColorlibConnector />} activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel >{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div className="text-center mx-auto">
            <div  className="p-3 w-full lg:w-1/3 overflow-hidden py-4 rounded shadow mx-auto">
              {activeStep === 0 && <Info1 />}
              {activeStep === 1 && <Info2 />}
              {activeStep === 2 && <Info3 />}
              {activeStep === 3 && <StatusType />}
              {/* {activeStep === 4 && } */}
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
                  {activeStep === steps.length - 1 ? "Submit" : "Next"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
