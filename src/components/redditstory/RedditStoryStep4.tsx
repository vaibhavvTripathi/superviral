import React from "react";
import { useRedditStoryFormStore } from "../../store/redditStoryFormStore";
import { useTTS } from "../../hooks/useTTS";

const VOICES = [
  { label: "Male", value: "male", description: "A deep, clear male voice." },
  {
    label: "Female",
    value: "female",
    description: "A bright, friendly female voice.",
  },
];

const PLATFORMS = [
  { label: "Instagram (Landscape)", value: "instagram" },
  { label: "TikTok (Portrait)", value: "tiktok" },
  { label: "Reels (Portrait)", value: "reels" },
];

export const RedditStoryStep4 = ({
  onBack,
  onGenerate,
}: {
  onBack: () => void;
  onGenerate: () => void;
}) => {
  const voice = useRedditStoryFormStore((s) => s.voice);
  const setVoice = useRedditStoryFormStore((s) => s.setVoice);
  const script = useRedditStoryFormStore((s) => s.script);
  const setAudio = useRedditStoryFormStore((s) => s.setAudio);
  const platform = useRedditStoryFormStore((s) => s.platform);
  const setPlatform = useRedditStoryFormStore((s) => s.setPlatform);

  const { mutateAsync: getTTS, isPending } = useTTS();

  const handlePreview = async () => {
    try {
      const audioBase64 = await getTTS({ text: script, voice });
      // Create a data URL for the audio
      const audioUrl = `data:audio/mp3;base64,${audioBase64}`;
      setAudio(audioUrl);
      onGenerate();
    } catch {
      console.error("something went wrong");
    }
  };

  let nextButtonText = "Next: Preview";
  if (!voice) nextButtonText = "Select a voice to continue";
  if (isPending) nextButtonText = "Generating Audio...";

  const isDisabled = !voice || isPending;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="mb-8">
        <h3 className="font-semibold mb-2">Select Voice</h3>
        <div className="flex flex-col gap-4">
          {VOICES.map((v) => (
            <button
              key={v.value}
              type="button"
              className={`border rounded-lg p-4 text-left transition-all duration-150 ${
                voice === v.value
                  ? "border-blue-600 ring-2 ring-blue-300"
                  : "border-gray-200"
              }`}
              onClick={() => setVoice(v.value)}
            >
              <div className="font-bold">{v.label}</div>
              <div className="text-xs text-gray-600">{v.description}</div>
            </button>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <h3 className="font-semibold mb-2">Select Platform</h3>
        <div className="flex flex-col gap-4">
          {PLATFORMS.map((p) => (
            <button
              key={p.value}
              type="button"
              className={`border rounded-lg p-4 text-left transition-all duration-150 ${
                platform === p.value
                  ? "border-blue-600 ring-2 ring-blue-300"
                  : "border-gray-200"
              }`}
              onClick={() => setPlatform(p.value)}
            >
              <div className="font-bold">{p.label}</div>
            </button>
          ))}
        </div>
      </div>
      <div className="flex gap-4 mt-8">
        <button
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded font-semibold"
          onClick={onBack}
        >
          Back
        </button>
        <button
          className={`px-6 py-2 rounded font-semibold transition-colors duration-200
            ${isDisabled ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-green-600 text-white hover:bg-green-700"}
          `}
          onClick={handlePreview}
          disabled={isDisabled}
        >
          {nextButtonText}
        </button>
      </div>
    </div>
  );
};
