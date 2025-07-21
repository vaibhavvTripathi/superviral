import React from "react";
import { AbsoluteFill, Audio, Sequence, useVideoConfig, Video, useCurrentFrame, interpolate } from "remotion";
import { z } from "zod";
import { RedditCompositionProps } from "../../../types/constants";
import { SubtitleTemplate } from "../../store/redditStoryFormStore";

function getFontSizes(width: number, height: number) {
  // Portrait
  if (width < height) {
    return {
      postTitle: 14,
      postSub: 10,
      subtitle: 22,
    };
  }
  // Square
  if (width === height) {
    return {
      postTitle: 16,
      postSub: 12,
      subtitle: 16,
    };
  }
  // Landscape (default)
  return {
    postTitle: 18,
    postSub: 13,
    subtitle: 16,
  };
}

export const RedditStory: React.FC<z.infer<typeof RedditCompositionProps> & { subtitleStyle?: SubtitleTemplate, background?: string }> = ({
  author,
  postTitle,
  script,
  audioUrl,
  subtitleStyle,
  background,
}) => {
  const { fps, durationInFrames, width, height } = useVideoConfig();
  const fontSizes = getFontSizes(width, height);
  // Dummy subtitle splitting: one line per 2.5 seconds
  const words = script.split(" ");
  const lines: string[] = [];
  for (let i = 0; i < words.length; i += 8) {
    lines.push(words.slice(i, i + 8).join(" "));
  }
  const defaultStyle = {
    color: "#fff",
    fontSize: fontSizes.subtitle,
    fontWeight: 600,
    textShadow: "0 2px 8px #000",
    fontFamily: "Inter, sans-serif",
  };
  return (
    <AbsoluteFill style={{ background: "#18181b" }}>
      {/* Render background video if provided */}
      {background ? (
        <Video src={background} startFrom={0} endAt={durationInFrames} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      ) : null}
      <Audio src={audioUrl} />
      {/* Reddit Post Card (smaller) */}
      <div
        style={{
          position: "absolute",
          top: 32,
          left: "50%",
          transform: "translateX(-50%)",
          width: width < height ? 220 : width === height ? 300 : 420,
          maxWidth: "92%",
          background: "#fff",
          borderRadius: 12,
          boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
          padding: 16,
          display: "flex",
          alignItems: "flex-start",
          gap: 12,
        }}
      >
        {/* Reddit Logo (smaller) */}
        <div style={{ flexShrink: 0 }}>
          <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="24" fill="#FF4500" />
            <ellipse cx="24" cy="32" rx="12" ry="6" fill="#fff" />
            <circle cx="17.5" cy="27.5" r="3.5" fill="#fff" />
            <circle cx="30.5" cy="27.5" r="3.5" fill="#fff" />
            <circle cx="17.5" cy="27.5" r="1.5" fill="#FF4500" />
            <circle cx="30.5" cy="27.5" r="1.5" fill="#FF4500" />
            <ellipse cx="24" cy="34" rx="5" ry="2" fill="#FF4500" />
          </svg>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ color: "#878A8C", fontSize: fontSizes.postSub, fontWeight: 500, marginBottom: 4 }}>
            r/AskReddit
          </div>
          <div style={{ color: "#1A1A1B", fontSize: fontSizes.postTitle, fontWeight: 700, marginBottom: 6, lineHeight: 1.2 }}>
            {postTitle}
          </div>
          <div style={{ color: "#878A8C", fontSize: fontSizes.postSub, fontWeight: 400 }}>
            Posted by <span style={{ color: "#0079D3", fontWeight: 500 }}>u/{author}</span>
          </div>
          {/* Fake upvotes/comments bar */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 10 }}>
            <span style={{ color: "#878A8C", fontSize: fontSizes.postSub }}>⬆️ 12.3k</span>
            <span style={{ color: "#878A8C", fontSize: fontSizes.postSub }}>⬇️</span>
            <span style={{ color: "#878A8C", fontSize: fontSizes.postSub }}>💬 1.2k</span>
            <span style={{ color: "#878A8C", fontSize: fontSizes.postSub }}>Share</span>
          </div>
        </div>
      </div>
      {/* Subtitle animation */}
      {lines.map((line, i) => (
        <Sequence key={i} from={i * 2.5 * fps} durationInFrames={2.5 * fps}>
          <SubtitleFadeIn style={subtitleStyle?.style || defaultStyle}>{line}</SubtitleFadeIn>
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

// Fade-in subtitle component
const SubtitleFadeIn: React.FC<{ children: React.ReactNode; style?: React.CSSProperties }> = ({ children, style }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 10], [0, 1], { extrapolateRight: 'clamp' });
  return (
    <div
      style={{
        position: "absolute",
        bottom: 120,
        width: "100%",
        textAlign: "center",
        opacity,
        ...style,
      }}
    >
      {children}
    </div>
  );
}; 