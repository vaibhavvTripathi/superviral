import React from "react";
import { useRedditStoryFormStore } from "../../store/redditStoryFormStore";
const BACKGROUNDS = [
  {
    label: "Nature Forest",
    value: "https://res.cloudinary.com/dpyd3p4oh/video/upload/v1752933402/v1_ikazoq.mp4",
    thumb: "/thumbnails/v1.png",
  },
  {
    label: "City Timelapse",
    value: "https://res.cloudinary.com/dpyd3p4oh/video/upload/v1752933415/v2_uncu3f.mp4",
    thumb: "/thumbnails/v2.png",
  },
];

export const RedditStoryStep3 = ({
  onBack,
  onNext,
}: {
  onBack: () => void;
  onNext: () => void;
}) => {
  const background = useRedditStoryFormStore((s) => s.background);
  const setBackground = useRedditStoryFormStore((s) => s.setBackground);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Select Background Video</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {BACKGROUNDS.map((bg) => (
          <button
            key={bg.value}
            type="button"
            className={`rounded-lg border-2 p-2 transition-all duration-150 flex flex-col items-center ${
              background === bg.value
                ? "border-blue-600 ring-2 ring-blue-300"
                : "border-gray-200"
            }`}
            onClick={() => setBackground(bg.value)}
          >
            <video
              src={bg.value}
              poster={bg.thumb}
              className="rounded w-full h-32 object-cover mb-2"
              muted
              loop
              autoPlay
              playsInline
            />
            <span className="font-medium">{bg.label}</span>
          </button>
        ))}
      </div>
      <div className="flex gap-4">
        <button
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded font-semibold"
          onClick={onBack}
        >
          Back
        </button>
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded font-semibold"
          onClick={onNext}
          disabled={!background || background.length==0}
        >
          Next: Select Audio & Generate
        </button>
      </div>
    </div>
  );
};
