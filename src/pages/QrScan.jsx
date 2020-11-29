import React, { useState } from "react";
import QrPage from "../components/QrScanner/QrScan";
import HowToPlay from "../components/QrScanner/HowToPlay";
import Logo from "../components/core/Logo";
import { navigate } from "@reach/router";
import BtnBack from "../components/core/BtnBack";
import BtnNext from "../components/core/BtnNext";

function getSteps() {
  return ["QrScanner", "HowToPlay"];
}

export default function QrScan() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

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
                  <div className="col-12 text-center">
                    <BtnBack
                      className="buttonBack"
                      disabled={activeStep === 0}
                      onClick={() => navigate("/home")}
                      text="Back"
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
