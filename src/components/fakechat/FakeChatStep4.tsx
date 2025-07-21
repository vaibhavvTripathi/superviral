import React from "react";
import { useFakeChatStore } from "../../store/fakeChatStore";
import { Player } from "@remotion/player";
import FakeChatComposition from "../../remotion/FakeChatComposition";

const DURATION_PER_MESSAGE = 60;
const FPS = 30;

const getDimensions = (aspectRatio: string) => {
  if (aspectRatio === "9:16") return { width: 720, height: 1280 };
  if (aspectRatio === "1:1") return { width: 1080, height: 1080 };
  return { width: 1280, height: 720 };
};

const FakeChatStep4: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const messages = useFakeChatStore((s) => s.messages);
  const selectedVideo = useFakeChatStore((s) => s.selectedVideo) || "";
  const audioUrl = useFakeChatStore((s) => s.audioUrl) || "";
  const template = useFakeChatStore((s) => s.template);
  const contactName = useFakeChatStore((s) => s.name);
  const aspectRatio = useFakeChatStore((s) => s.aspectRatio);


  const { width, height } = getDimensions(aspectRatio);
  const isPortrait = aspectRatio === "9:16";

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">
        Preview Your Fake Chat Video
      </h2>
      <div className="my-8 flex justify-center">
        <Player
          component={FakeChatComposition}
          inputProps={{
            messages,
            video: selectedVideo,
            audio: audioUrl,
            template,
            contactName,
            aspectRatio,
          }}
          durationInFrames={messages.length * DURATION_PER_MESSAGE}
          fps={FPS}
          compositionHeight={height}
          compositionWidth={width}
          style={{
            width: isPortrait ? 270 : 480,
            height: isPortrait ? 480 : 270,
            maxWidth: isPortrait ? 270 : 480,
            maxHeight: isPortrait ? 480 : 270,
            borderRadius: 12,
            boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
          }}
          controls
        />
      </div>
      <div className="flex gap-4">
        <button
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded font-semibold"
          onClick={onBack}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default FakeChatStep4;
