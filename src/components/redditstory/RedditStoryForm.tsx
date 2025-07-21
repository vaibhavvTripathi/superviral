"use client";
import React from "react";
import { RedditStoryStep1 } from "./RedditStoryStep1";
import { RedditStoryStep2 } from "./RedditStoryStep2";
import { RedditStoryStep3 } from "./RedditStoryStep3";
import { RedditStoryStep4 } from "./RedditStoryStep4";
import { RedditStoryStep5 } from "./RedditStoryStep5";
import { useRedditStoryFormStore } from "../../store/redditStoryFormStore";

const steps = [
  { label: "Post Details" },
  { label: "Fonts" },
  { label: "Background & Style" },
  { label: "Voice & TTS" },
  { label: "Preview" },
];

export const RedditStoryForm: React.FC = () => {
  const step = useRedditStoryFormStore((s) => s.step);
  const setStep = useRedditStoryFormStore((s) => s.setStep);

  return (
    <div className="max-w-5xl mx-auto py-10">
      {/* Stepper */}
      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center justify-center gap-4 w-full">
          {steps.map((s, i) => (
            <div key={s.label} className="flex flex-col items-center flex-1 min-w-0">
              <div
                className={`rounded-full w-9 h-9 flex items-center justify-center font-bold border-2 transition-all duration-200
                  ${step === i + 1
                    ? "bg-blue-600 text-white border-blue-600 scale-110 shadow-lg"
                    : "bg-white text-gray-700 border-gray-300"}
                `}
              >
                {i + 1}
              </div>
              <span
                className={`mt-2 text-xs font-medium text-center truncate transition-colors duration-200 ${
                  step === i + 1 ? "text-blue-700" : "text-gray-500"
                }`}
                style={{ maxWidth: 80 }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
        {/* Progress Bar */}
        <div className="w-full h-2 bg-gray-200 rounded-full mt-6 relative overflow-hidden">
          <div
            className="h-2 bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
          ></div>
        </div>
      </div>
      {/* Steps */}
      {step === 1 && <RedditStoryStep1 onNext={() => setStep(2)} />}
      {step === 2 && (
        <RedditStoryStep2 onBack={() => setStep(1)} onNext={() => setStep(3)} />
      )}
      {step === 3 && (
        <RedditStoryStep3 onBack={() => setStep(2)} onNext={() => setStep(4)} />
      )}
      {step === 4 && (
        <RedditStoryStep4
          onGenerate={() => setStep(5)}
          onBack={() => setStep(3)}
        />
      )}
      {step === 5 && <RedditStoryStep5 onBack={() => setStep(4)} />}
    </div>
  );
};
