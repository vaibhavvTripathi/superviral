import React from "react";
import { useRedditStoryFormStore } from "../../store/redditStoryFormStore";
import { SUBTITLE_TEMPLATES } from "../../../types/constants";

export const RedditStoryStep2 = ({
  onBack,
  onNext,
}: {
  onBack: () => void;
  onNext: () => void;
}) => {
  const subtitleStyle = useRedditStoryFormStore((s) => s.subtitleStyle);
  const setSubtitleStyle = useRedditStoryFormStore((s) => s.setSubtitleStyle);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Select Subtitle Template</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {SUBTITLE_TEMPLATES.map((template) => (
          <button
            key={template.label}
            type="button"
            className={`border rounded-lg p-4 flex flex-col items-center justify-center bg-gray-300 transition-all duration-150 cursor-pointer focus:outline-none ${
              subtitleStyle?.label === template.label
                ? "border-blue-600 ring-2 ring-blue-300"
                : "border-gray-200"
            }`}
            onClick={() => setSubtitleStyle(template)}
          >
            <span
              style={{ ...template.style, display: "block", marginBottom: 8 }}
            >
              WORD
            </span>
            <span className="text-xs text-gray-600">{template.label}</span>
          </button>
        ))}
      </div>
      <div className="flex gap-4 mt-8">
        <button
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded font-semibold"
          onClick={onBack}
        >
          Back
        </button>
        <button
          className={`px-6 py-2  text-white rounded font-semibold ${!subtitleStyle ? "bg-gray-200 text-gray-950" : "bg-blue-600"}`}
          onClick={onNext}
          disabled={!subtitleStyle}
        >
          {subtitleStyle ? "Next: Select Background" : "Disabled"}
        </button>
      </div>
    </div>
  );
};
