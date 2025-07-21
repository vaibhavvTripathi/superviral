import React, { useState } from 'react';
import { useFakeChatStore } from '../../store/fakeChatStore';
import generateFakeChatScript from '../../helpers/generateFakeChatScript';
import { useTTS } from '../../hooks/useTTS';

const VOICES = [
  { label: 'Male', value: 'male', description: 'A deep, clear male voice.' },
  { label: 'Female', value: 'female', description: 'A bright, friendly female voice.' },
];

const ASPECT_RATIOS = [
  { label: "9:16 (TikTok/Reels)", value: "9:16" },
  { label: "1:1 (Square)", value: "1:1" },
  { label: "16:9 (YouTube)", value: "16:9" },
];

const FakeChatStep3: React.FC<{ onBack?: () => void; onNext?: () => void }> = ({ onBack, onNext }) => {
  const messages = useFakeChatStore((s) => s.messages);
  const setAudioUrl = useFakeChatStore((s) => s.setAudioUrl);
  const aspectRatio = useFakeChatStore((s) => s.aspectRatio);
  const setAspectRatio = useFakeChatStore((s) => s.setAspectRatio);
  const [voice, setVoice] = useState<'male' | 'female'>('male');
  const { mutateAsync: getTTS, isPending } = useTTS();

  const script = generateFakeChatScript(messages);

  const handleNext = async () => {
    const audioBase64 = await getTTS({ text: script, voice });
    setAudioUrl('data:audio/mp3;base64,' + audioBase64);
    if (onNext) onNext();
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 w-full max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-6">Audio & Script</h2>
      <div className="mb-8">
        <h3 className="font-semibold mb-2">Select Voice</h3>
        <div className="flex flex-col gap-4">
          {VOICES.map((v) => (
            <button
              key={v.value}
              type="button"
              className={`border rounded-lg p-4 text-left transition-all duration-150 ${voice === v.value ? 'border-blue-600 ring-2 ring-blue-300' : 'border-gray-200'}`}
              onClick={() => setVoice(v.value as 'male' | 'female')}
            >
              <div className="font-bold">{v.label}</div>
              <div className="text-xs text-gray-600">{v.description}</div>
            </button>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <h3 className="font-semibold mb-2">Aspect Ratio</h3>
        <div className="flex gap-2">
          {ASPECT_RATIOS.map((r) => (
            <button
              key={r.value}
              type="button"
              className={`border rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-150 ${
                aspectRatio === r.value ? 'border-blue-600 ring-2 ring-blue-300' : 'border-gray-200'
              }`}
              onClick={() => setAspectRatio(r.value as '9:16' | '1:1' | '16:9')}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <h3 className="font-semibold mb-2">Script Preview</h3>
        <textarea
          className="w-full border rounded p-2 mb-2 bg-gray-50 text-gray-800"
          rows={5}
          value={script}
          readOnly
        />
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
          onClick={handleNext}
          disabled={isPending || !voice}
        >
          {isPending ? 'Generating Audio...' : 'Next: Preview'}
        </button>
      </div>
    </div>
  );
};

export default FakeChatStep3; 