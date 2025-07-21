import React from "react";
import { AbsoluteFill, Video, Audio, Sequence, useVideoConfig, useCurrentFrame, interpolate } from "remotion";

export interface SplitScreenVideoProps {
  foregroundVideo: string;
  backgroundVideo: string;
  splitPosition: "top" | "bottom";
  caption: string;
  audioUrl?: string;
}

export const SplitScreenVideo: React.FC<SplitScreenVideoProps> = ({
  foregroundVideo,
  backgroundVideo,
  splitPosition,
  caption,
  audioUrl,
}) => {
  const { fps } = useVideoConfig();
  // Split caption into lines of 8 words
  const words = caption.split(" ");
  const lines: string[] = [];
  for (let i = 0; i < words.length; i += 8) {
    lines.push(words.slice(i, i + 8).join(" "));
  }
  return (
    <AbsoluteFill style={{ background: "#000" }}>
      {/* Background video (bottom or top depending on splitPosition) */}
      {splitPosition === "top" ? (
        <>
          <div style={{ height: "50%", width: "100%", position: "absolute", top: 0, left: 0 }}>
            <Video src={foregroundVideo} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ height: "50%", width: "100%", position: "absolute", top: "50%", left: 0 }}>
            <Video src={backgroundVideo} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </>
      ) : (
        <>
          <div style={{ height: "50%", width: "100%", position: "absolute", top: 0, left: 0 }}>
            <Video src={backgroundVideo} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ height: "50%", width: "100%", position: "absolute", top: "50%", left: 0 }}>
            <Video src={foregroundVideo} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </>
      )}
      {/* Audio playback */}
      {audioUrl && <Audio src={audioUrl} />}
      {/* Animated subtitle chunks */}
      {lines.map((line, i) => (
        <Sequence key={i} from={i * 2.5 * fps} durationInFrames={2.5 * fps}>
          <SubtitleFadeIn>{line}</SubtitleFadeIn>
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

// Fade-in subtitle component
const SubtitleFadeIn: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 10], [0, 1], { extrapolateRight: 'clamp' });
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        width: "100%",
        top: "48%",
        textAlign: "center",
        color: "#fff",
        fontWeight: 700,
        fontSize: 32,
        textShadow: "0 2px 8px #000",
        letterSpacing: 1,
        zIndex: 10,
        opacity,
      }}
    >
      {children}
    </div>
  );
}; 