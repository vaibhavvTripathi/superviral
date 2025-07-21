import React, { useState } from "react";
import { SplitScreenStep1 } from "./SplitScreenStep1";
import { SplitScreenStep4 } from "./SplitScreenStep4";
import { SplitScreenStep5 } from "./SplitScreenStep5";
import { SplitScreenStep3 } from "./SplitScreenStep3";
import { SplitScreenStep2 } from "./SplitScreenStep2";

const STEPS = [
  "Split Screen Setup",
  "Choose Font",
  "Write Script",
  "Choose Voice",
  "Preview",
];

export const SplitScreenStepper = () => {
  const [step, setStep] = useState(0);

  const goNext = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const goBack = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <div>
      {/* Stepper Indicator */}
      <div className="flex items-center justify-center gap-4 mb-8">
        {STEPS.map((label, idx) => (
          <div key={label} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                idx === step
                  ? "bg-blue-600"
                  : idx < step
                    ? "bg-green-500"
                    : "bg-gray-300"
              }`}
            >
              {idx + 1}
            </div>
            <span
              className={`text-sm ${idx === step ? "font-bold text-blue-700" : "text-gray-500"}`}
            >
              {label}
            </span>
            {idx < STEPS.length - 1 && (
              <div className="w-8 h-1 bg-gray-300 rounded" />
            )}
          </div>
        ))}
      </div>
      {/* Step Content */}
      <div>
        {step === 0 && <SplitScreenStep1 onNext={goNext} />}
        {step === 1 && <SplitScreenStep2 onNext={goNext} onBack={goBack} />}
        {step === 2 && <SplitScreenStep3 onNext={goNext} onBack={goBack} />}
        {step === 3 && <SplitScreenStep4 onNext={goNext} onBack={goBack} />}
        {step === 4 && <SplitScreenStep5 onBack={goBack} />}
      </div>
    </div>
  );
};
