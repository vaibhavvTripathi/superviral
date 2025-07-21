import { z } from "zod";
export const COMP_NAME = "MyComp";

export const CompositionProps = z.object({
  title: z.string(),
});

export const defaultMyCompProps: z.infer<typeof CompositionProps> = {
  title: "Next.js and Remotion",
};

export const REDDIT_COMP_NAME = "RedditStory";

export const RedditCompositionProps = z.object({
  author: z.string(),
  postTitle: z.string(),
  script: z.string(),
  audioUrl: z.string(),
});

export const defaultRedditCompProps: z.infer<typeof RedditCompositionProps> = {
  author: "RedditUser123",
  postTitle: "This is a Reddit Story Title",
  script: "This is the story script that will be read out loud.",
  audioUrl: "/outputs/dummy-audio.mp3",
};

export const DURATION_IN_FRAMES = 780; // 26 seconds at 30 FPS
export const VIDEO_WIDTH = 1280;
export const VIDEO_HEIGHT = 720;
export const VIDEO_FPS = 30;

export const SUBTITLE_TEMPLATES = [
  {
    label: "Bold Black Outline",
    style: {
      fontFamily: "Arial Black, sans-serif",
      color: "#fff",
      fontWeight: "bold",
      fontSize: 40,
      textShadow: "2px 2px 0 #000, -2px -2px 0 #000",
    },
  },
  {
    label: "Red & Bold",
    style: {
      fontFamily: "Arial, sans-serif",
      color: "#e53935",
      fontWeight: "bold",
      fontSize: 40,
      textShadow: "1px 1px 0 #fff",
    },
  },
  {
    label: "Yellow Highlight",
    style: {
      fontFamily: "Arial, sans-serif",
      color: "#222",
      fontWeight: "bold",
      fontSize: 40,
      background: "#fff700",
      padding: "0 8px",
      borderRadius: 6,
    },
  },
  {
    label: "Blue Shadow",
    style: {
      fontFamily: "Verdana, sans-serif",
      color: "#fff",
      fontWeight: "bold",
      fontSize: 40,
      textShadow: "2px 2px 8px #2196f3",
    },
  },
  {
    label: "Green Italic",
    style: {
      fontFamily: "Georgia, serif",
      color: "#43a047",
      fontStyle: "italic",
      fontWeight: "bold",
      fontSize: 40,
      textShadow: "1px 1px 0 #fff",
    },
  },
  {
    label: "Minimal White",
    style: {
      fontFamily: "Helvetica, Arial, sans-serif",
      color: "#fff",
      fontWeight: "normal",
      fontSize: 36,
      textShadow: "none",
    },
  },
  // ...more templates
];

