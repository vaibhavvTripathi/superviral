import React, { useState } from "react";
import FakeChatStep4 from "./FakeChatStep4";
import FakeChatStep1 from "./FakeChatStep1";
import FakeChatStep2 from "./FakeChatStep2";
import FakeChatStep3 from "./FakeChatStep3";

const steps = [
  { label: "Edit Chat", component: FakeChatStep1 },
  { label: "Select Video", component: FakeChatStep2 },
  { label: "Audio/TTS", component: FakeChatStep3 },
  { label: "Preview", component: FakeChatStep4 },
];

const FakeChatStepper: React.FC = () => {
  const [step, setStep] = useState(0);

  const StepComponent = steps[step].component;

  return (
    <div className="w-full p-4">
      {/* Improved Stepper Bar */}
      <div className="sticky top-0 z-10 bg-gradient-to-br from-gray-50 via-white to-gray-100 pb-4 mb-6">
        <div className="flex items-center justify-between w-full gap-2">
          <div className="flex w-full gap-4">
            {steps.map((s, i) => (
              <div
                key={s.label}
                className={`flex-1 flex flex-col items-center relative`}
              >
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full font-bold text-base mb-1 transition-all duration-200
                  ${i === step ? "bg-blue-600 text-white shadow-lg scale-110" : "bg-gray-200 text-gray-500"}`}
                >
                  {i + 1}
                </div>
                <span
                  className={`text-xs font-semibold ${i === step ? "text-blue-700" : "text-gray-500"}`}
                >
                  {s.label}
                </span>
                {i < steps.length - 1 && (
                  <div className="absolute right-[-24px] top-4 w-12 h-1 bg-gray-200 z-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mb-6 w-full">
        <StepComponent
          onNext={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
          onBack={() => setStep((s) => Math.max(0, s - 1))}
        />
      </div>
    </div>
  );
};

export default FakeChatStepper;
