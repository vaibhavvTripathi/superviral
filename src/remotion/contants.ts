import type { Props } from "./FakeChatComposition";

export const fakeChatProps: Props = {
  messages: [
    {
      text: "Hey, how are you?",
      alignment: "left" as const,
    },
    {
      text: "I’m good! How about you?",
      alignment: "right" as const,
    },
    {
      text: "Doing great, thanks!",
      alignment: "left" as const,
    },
    {
      text: "Want to catch up later?",
      alignment: "right" as const,
    },
    {
      text: "Sure, what time?",
      alignment: "left" as const,
    },
    {
      text: "Maybe around 6pm?",
      alignment: "right" as const,
    },
    {
      text: "Sounds perfect!",
      alignment: "left" as const,
    },
    {
      text: "Should I bring snacks?",
      alignment: "right" as const,
    },
    {
      text: "Of course! Chips and soda?",
      alignment: "left" as const,
    },
    {
      text: "You know me too well 😂",
      alignment: "right" as const,
    },
    {
      text: "See you then!",
      alignment: "left" as const,
    },
    {
      text: "See you!",
      alignment: "right" as const,
    },
    {
      text: "Don’t forget the movie!",
      alignment: "left" as const,
    },
    {
      text: "Already downloaded it!",
      alignment: "right" as const,
    },
    {
      text: "Empty Message is here",
      alignment: "left" as const,
    },
    {
      text: "Empty Message is there",
      alignment: "right" as const,
    },
    {
      text: "Empty Message is here",
      alignment: "left" as const,
    },
    {
      text: "Empty Message is there",
      alignment: "right" as const,
    },
    {
      text: "Empty Message is here",
      alignment: "left" as const,
    },
    {
      text: "Empty Message is ther",
      alignment: "right" as const,
    },
  ],
  video: "https://res.cloudinary.com/dpyd3p4oh/video/upload/v1752933402/v1_ikazoq.mp4",
  audio: "https://res.cloudinary.com/dpyd3p4oh/video/upload/v1752934689/fakechat_f4tlxe.mp3",
  template: "ios",
  contactName: "Alex",
  aspectRatio: "9:16",
};

export const redditstory = {
  author: "rachel-maryjane",
  postTitle: "How to secure a 10 foot ramp to stone stairs?",
  script:
    "My sweet pup is 16 and is now struggling to get up and down our front steps to go outside.\n\nOur front steps measure 6 feet from the edge of the top step to the bottom step, so I'd probably need a ramp that's 8-10 feet long. I will also be working on a tight budget, about $50 all in. All the ramps I find on Facebook marketplace seem to max out around 6 feet.\n\nI searched through old posts and found some great stuff about building a ramp yourself, but can't find anything about how to attach/secure it when you have stone stairs!",
  audioUrl: "https://res.cloudinary.com/dpyd3p4oh/video/upload/v1752934647/reddit_naf51q.mp3",
  subtitleStyle: {
    label: "Bold Black Outline",
    style: {
      fontFamily: "Arial Black, sans-serif",
      color: "#fff",
      fontWeight: "bold",
      fontSize: 40,
      textShadow: "2px 2px 0 #000, -2px -2px 0 #000",
    },
  },
  background: "https://res.cloudinary.com/dpyd3p4oh/video/upload/v1752933415/v2_uncu3f.mp4",
  voice: "male",
};

export const splitscreen = {
  foregroundVideo: "https://res.cloudinary.com/dpyd3p4oh/video/upload/v1752933402/v1_ikazoq.mp4",
  backgroundVideo: "https://res.cloudinary.com/dpyd3p4oh/video/upload/v1752933415/v2_uncu3f.mp4",
  aspectRatio: "9:16",
  splitPosition: "bottom",
  caption:
    "My sweet pup is 16 and is now struggling to get up and down our front steps to go outside.\n\nOur front steps measure 6 feet from the edge of the top step to the bottom step, so I'd probably need a ramp that's 8-10 feet long. I will also be working on a tight budget, about $50 all in. All the ramps I find on Facebook marketplace seem to max out around 6 feet.\n\nI searched through old posts and found some great stuff about building a ramp yourself, but can't find anything about how to attach/secure it when you have stone stairs!",
  subtitleStyle: {
    label: "Bold Black Outline",
    style: {
      fontFamily: "Arial Black, sans-serif",
      color: "#fff",
      fontWeight: "bold",
      fontSize: 40,
      textShadow: "2px 2px 0 #000, -2px -2px 0 #000",
    },
  },
  voice: "female",
  audioUrl: "https://res.cloudinary.com/dpyd3p4oh/video/upload/v1752934598/splitscreen_sbiizi.mp3",
};
