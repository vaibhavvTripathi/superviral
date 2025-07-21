import { create } from "zustand";
import { SUBTITLE_TEMPLATES } from "../../types/constants";

export type SubtitleTemplate = typeof SUBTITLE_TEMPLATES[number];

interface RedditStoryFormState {
  step: number;
  setStep: (step: number) => void;
  author: string;
  setAuthor: (v: string) => void;
  postTitle: string;
  setPostTitle: (v: string) => void;
  script: string;
  setScript: (v: string) => void;
  font: string;
  setFont: (v: string) => void;
  background: string;
  setBackground: (v: string) => void;
  audio: string;
  setAudio: (v: string) => void;
  subtitleStyle?: SubtitleTemplate;
  setSubtitleStyle: (style: SubtitleTemplate) => void;
  voice: string;
  setVoice: (v: string) => void;
  introVoice: string;
  setIntroVoice: (v: string) => void;
  scriptVoice: string;
  setScriptVoice: (v: string) => void;
  platform: string;
  setPlatform: (v: string) => void;
}

export const useRedditStoryFormStore = create<RedditStoryFormState>((set) => ({
  step: 1,
  setStep: (step) => set({ step }),
  author: "rachel-maryjane",
  setAuthor: (author) => set({ author }),
  postTitle: "How to secure a 10 foot ramp to stone stairs?",
  setPostTitle: (postTitle) => set({ postTitle }),
  script:
    "My sweet pup is 16 and is now struggling to get up and down our front steps to go outside.\n\nOur front steps measure 6 feet from the edge of the top step to the bottom step, so I'd probably need a ramp that's 8-10 feet long. I will also be working on a tight budget, about $50 all in. All the ramps I find on Facebook marketplace seem to max out around 6 feet.\n\nI searched through old posts and found some great stuff about building a ramp yourself, but can't find anything about how to attach/secure it when you have stone stairs!",
  setScript: (script) => set({ script }),
  font: "Inter, sans-serif",
  setFont: (font) => set({ font }),
  background: "",
  setBackground: (background) => set({ background }),
  audio: "/audios/piano.mp3",
  setAudio: (audio) => set({ audio }),
  subtitleStyle: undefined,
  setSubtitleStyle: (subtitleStyle) => set({ subtitleStyle }),
  voice: "male",
  setVoice: (voice) => set({ voice }),
  introVoice: "male",
  setIntroVoice: (introVoice) => set({ introVoice }),
  scriptVoice: "male",
  setScriptVoice: (scriptVoice) => set({ scriptVoice }),
  platform: "instagram",
  setPlatform: (platform) => set({ platform }),
})); 