import React from "react";
import { useSplitScreenStore } from "../../store/splitScreenStore";
import type { SplitScreenState } from "../../store/splitScreenStore";
import { Player } from "@remotion/player";
import { SplitScreenVideo } from "../../remotion/SplitScreenVideo";

const DURATION_IN_FRAMES = 780;
const VIDEO_FPS = 30;

const getDimensions = (aspectRatio: string) => {
  if (aspectRatio === "9:16") return { width: 720, height: 1280 };
  if (aspectRatio === "1:1") return { width: 1080, height: 1080 };
  return { width: 1280, height: 720 };
};

export const SplitScreenStep5 = ({ onBack }: { onBack: () => void }) => {
  const foregroundVideo = useSplitScreenStore((s) => s.foregroundVideo);
  const backgroundVideo = useSplitScreenStore((s) => s.backgroundVideo);
  const aspectRatio = useSplitScreenStore((s) => s.aspectRatio);
  const splitPosition = useSplitScreenStore((s) => s.splitPosition);
  const caption = useSplitScreenStore((s) => s.caption);
  const subtitleStyle = useSplitScreenStore((s: SplitScreenState) => s.subtitleStyle);
  const voice = useSplitScreenStore((s: SplitScreenState) => s.voice);
  const audioUrl = useSplitScreenStore((s) => s.audio);

  const { width, height } = getDimensions(aspectRatio);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">
        Preview Your Split Screen Video
      </h2>
      <div className="my-8 flex justify-center">
        <Player
          component={SplitScreenVideo}
          inputProps={{
            foregroundVideo,
            backgroundVideo,
            aspectRatio,
            splitPosition,
            caption,
            subtitleStyle,
            voice,
            audioUrl,
          }}
          durationInFrames={DURATION_IN_FRAMES}
          fps={VIDEO_FPS}
          compositionHeight={height}
          compositionWidth={width}
          style={{
            width: width < height ? 270 : 480,
            height: width < height ? 480 : 270,
            maxWidth: width < height ? 270 : 480,
            maxHeight: width < height ? 480 : 270,
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
