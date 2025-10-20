import { useState } from "react";

import Page3 from "./assets/Page3.jsx";
import { Page1 } from "./assets/Page1.jsx";
import { Page4 } from "./assets/Page4.jsx";
import { Page2 } from "./assets/Page2.jsx";

function App() {
  const getCurrentStep = () => {
    return Number(localStorage.getItem("currentStep"));
  };
  const [step, setStep] = useState(getCurrentStep() || 1);

  const handleStepForward = () => {
    setStep(step + 1);
  };

  const handleStepBackward = () => {
    localStorage.setItem("currentStep", step - 1);
    setStep(step - 1);
  };

  return (
    <>
      {step === 1 && (
        <Page1 handleStepForward={handleStepForward} step={step} />
      )}

      {step === 2 && (
        <Page2
          handleStepForward={handleStepForward}
          step={step}
          handleStepBackward={handleStepBackward}
        />
      )}
      {step === 3 && (
        <Page3
          handleStepForward={handleStepForward}
          step={step}
          handleStepBackward={handleStepBackward}
        />
      )}

      {step === 4 && <Page4 />}
    </>
  );
}

export default App;
