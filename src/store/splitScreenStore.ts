import { create } from "zustand";
import { SUBTITLE_TEMPLATES } from "../../types/constants";

export type SplitScreenAspectRatio = "9:16" | "1:1" | "16:9";
export type SplitScreenPosition = "top" | "bottom";
export type SubtitleTemplate = (typeof SUBTITLE_TEMPLATES)[number];

export interface SplitScreenState {
  foregroundVideo: string;
  setForegroundVideo: (v: string) => void;
  backgroundVideo: string;
  setBackgroundVideo: (v: string) => void;
  aspectRatio: SplitScreenAspectRatio;
  setAspectRatio: (v: SplitScreenAspectRatio) => void;
  splitPosition: SplitScreenPosition;
  setSplitPosition: (v: SplitScreenPosition) => void;
  caption: string;
  setCaption: (v: string) => void;
  voice: string;
  setVoice: (v: string) => void;
  subtitleStyle: SubtitleTemplate | null;
  setSubtitleStyle: (v: SubtitleTemplate) => void;
  audio: string;
  setAudio: (v: string) => void;
}

export const useSplitScreenStore = create<SplitScreenState>((set) => ({
  foregroundVideo: "",
  setForegroundVideo: (foregroundVideo) => set({ foregroundVideo }),
  backgroundVideo: "",
  setBackgroundVideo: (backgroundVideo) => set({ backgroundVideo }),
  aspectRatio: "9:16",
  setAspectRatio: (aspectRatio) => set({ aspectRatio }),
  splitPosition: "top",
  setSplitPosition: (splitPosition) => set({ splitPosition }),
  caption: "My sweet pup is 16 and is now struggling to get up and down our front steps to go outside.\n\nOur front steps measure 6 feet from the edge of the top step to the bottom step, so I'd probably need a ramp that's 8-10 feet long. I will also be working on a tight budget, about $50 all in. All the ramps I find on Facebook marketplace seem to max out around 6 feet.\n\nI searched through old posts and found some great stuff about building a ramp yourself, but can't find anything about how to attach/secure it when you have stone stairs!",
  setCaption: (caption) => set({ caption }),
  voice: "",
  setVoice: (voice) => set({ voice }),
  subtitleStyle: null,
  setSubtitleStyle: (subtitleStyle) => set({ subtitleStyle }),
  audio: "",
  setAudio: (audio) => set({ audio }),
})); 