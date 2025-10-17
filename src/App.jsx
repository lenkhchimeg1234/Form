import { useState } from "react";

import Page2 from "./assets/Components/page2.jsx";
import Page3 from "./assets/Components/Page3.jsx";
import { StepOne } from "./assets/Components/StepOne.jsx";
import { Page4 } from "./assets/Components/page4.jsx";

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
