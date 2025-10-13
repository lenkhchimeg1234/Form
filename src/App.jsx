import { useState } from "react";

import "./App.css";
import Page2 from "./page2.jsx";
import Page3 from "./Page3.jsx";
import { StepOne } from "./page1.jsx";
import { Page4 } from "./page4.jsx";

function App() {
  const [step, setStep] = useState(1);

  const handleStepForward = () => {
    setStep(step + 1);
  };

  const handleStepBackward = () => {
    setStep(step - 1);
  };

  return (
    <>
      {step === 1 && (
        <StepOne handleStepForward={handleStepForward} step={step} />
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
