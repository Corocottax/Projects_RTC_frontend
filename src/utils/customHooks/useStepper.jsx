import { useState } from "react";

export const useStepper = ({ initialStep = 1, limit = 1 }) => {
  const [step, setStep] = useState(initialStep);

  const next = () => {
    if (step < limit) {
      setStep(step + 1);
    }
  };

  const previous = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return { step, next, previous }
};
