import React from "react";
import { useSplitScreenStore } from "../../store/splitScreenStore";

// Step 3: Write Script/Caption
export const SplitScreenStep3 = ({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack?: () => void;
}) => {
  // Only keep caption and setCaption
  const caption = useSplitScreenStore((s) => s.caption);
  const setCaption = useSplitScreenStore((s) => s.setCaption);

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Left: Script/Caption */}
      <div className="flex-1 bg-white rounded-lg shadow p-6 min-w-[320px]">
        <h2 className="text-xl font-semibold mb-4">Write Caption/Script</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Caption/Script
          </label>
          <textarea
            className="w-full border rounded p-2"
            rows={4}
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Enter your caption or script here"
          />
        </div>
        <div className="flex gap-4 mt-4">
          {onBack && (
            <button
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded font-semibold"
              onClick={onBack}
            >
              Back
            </button>
          )}
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded font-semibold"
            disabled={caption.length === 0}
            onClick={onNext}
          >
            Next: Choose Voice
          </button>
        </div>
      </div>
      {/* Right: Preview */}
      <div className="flex-1 min-w-[320px] flex items-center justify-center">
        <div className="bg-gray-100 rounded-lg shadow p-6 w-full h-64 flex items-center justify-center">
          {/* Script Preview */}
          <div className="w-full h-full flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              Script Preview
            </h3>
            <div className="bg-white border border-gray-300 rounded p-4 w-full h-full overflow-auto text-gray-800 whitespace-pre-line text-center">
              {caption ? (
                caption
              ) : (
                <span className="text-gray-400">
                  Your script/caption will appear here...
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
