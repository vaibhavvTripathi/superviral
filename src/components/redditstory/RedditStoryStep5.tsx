import React from "react";
import { useRedditStoryFormStore } from "../../store/redditStoryFormStore";
import { Player } from "@remotion/player";
import { RedditStory } from "../../remotion/MyComp/RedditStory";
import { DURATION_IN_FRAMES, VIDEO_FPS } from "../../../types/constants";

function getDimensions(platform: string) {
  if (platform === "tiktok" || platform === "reels") {
    return { width: 720, height: 1280 };
  }
  return { width: 1280, height: 720 };
}

export const RedditStoryStep5 = ({ onBack }: { onBack: () => void }) => {
  const author = useRedditStoryFormStore((s) => s.author);
  const postTitle = useRedditStoryFormStore((s) => s.postTitle);
  const script = useRedditStoryFormStore((s) => s.script);
  const audioUrl = useRedditStoryFormStore((s) => s.audio);
  const subtitleStyle = useRedditStoryFormStore((s) => s.subtitleStyle);
  const background = useRedditStoryFormStore((s) => s.background);
  const voice = useRedditStoryFormStore((s) => s.voice);
  const platform = useRedditStoryFormStore((s) => s.platform);

  const { width, height } = getDimensions(platform);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">
        Preview Your Reddit Story Video
      </h2>
      <div className="my-8 flex justify-center">
        <Player
          component={RedditStory}
          inputProps={{
            author,
            postTitle,
            script,
            audioUrl,
            subtitleStyle,
            background,
            voice,
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
