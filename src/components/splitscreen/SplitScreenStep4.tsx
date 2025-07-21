import React from "react";
import { useSplitScreenStore } from "../../store/splitScreenStore";
import { useTTS } from "../../hooks/useTTS";

const VOICES = [
  { label: "Male", value: "male", description: "A deep, clear male voice." },
  { label: "Female", value: "female", description: "A bright, friendly female voice." },
];

export const SplitScreenStep4 = ({ onBack, onNext }: { onBack: () => void; onNext: () => void }) => {
  const voice = useSplitScreenStore((s) => s.voice);
  const setVoice = useSplitScreenStore((s) => s.setVoice);
  const caption = useSplitScreenStore((s) => s.caption);
  const setAudio = useSplitScreenStore((s) => s.setAudio);

  const { mutateAsync: getTTS, isPending } = useTTS();

  const handleGenerateAudio = async () => {
    try {
      const audioBase64 = await getTTS({ text: caption, voice });
      const audioUrl = `data:audio/mp3;base64,${audioBase64}`;
      setAudio(audioUrl);
      onNext();
    } catch {
      // Optionally show error to user
      console.error("Something went wrong generating audio");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Select Voice</h2>
      <div className="flex flex-col gap-4 mb-8">
        {VOICES.map((v) => (
          <button
            key={v.value}
            type="button"
            className={`border rounded-lg p-4 text-left transition-all duration-150 ${
              voice === v.value ? "border-blue-600 ring-2 ring-blue-300" : "border-gray-200"
            }`}
            onClick={() => setVoice(v.value)}
          >
            <div className="font-bold">{v.label}</div>
            <div className="text-xs text-gray-600">{v.description}</div>
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
          className="px-6 py-2 bg-green-600 text-white rounded font-semibold"
          onClick={handleGenerateAudio}
          disabled={!voice || isPending || !caption}
        >
          {isPending ? "Generating Audio..." : "Next: Preview"}
        </button>
      </div>
    </div>
  );
}; 