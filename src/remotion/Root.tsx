import { Composition } from "remotion";
import { DURATION_IN_FRAMES, VIDEO_FPS } from "../../types/constants";
import { RedditStory } from "./MyComp/RedditStory";
import { SplitScreenVideo } from "./SplitScreenVideo";
import FakeChatComposition from "./FakeChatComposition";
import { fakeChatProps, redditstory, splitscreen } from "./contants";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Reddit Story Compositions */}
      <Composition
        id="RedditStoryLandscape"
        component={RedditStory}
        durationInFrames={DURATION_IN_FRAMES}
        fps={VIDEO_FPS}
        width={1280}
        height={720}
        defaultProps={redditstory}
      />

      <Composition
        id="SplitScreen169"
        // @ts-expect-error: SplitScreenVideo expects specific props, but Remotion Composition requires Record<string, unknown>
        component={SplitScreenVideo as React.FC<Record<string, unknown>>}
        durationInFrames={DURATION_IN_FRAMES}
        fps={VIDEO_FPS}
        width={1280}
        height={720}
        defaultProps={splitscreen}
      />
      {/* FakeChat Compositions */}
      <Composition
        id="FakeChat"
        component={FakeChatComposition}
        durationInFrames={DURATION_IN_FRAMES}
        fps={VIDEO_FPS}
        width={1280}
        height={720}
        defaultProps={fakeChatProps}
      />
    </>
  );
};
