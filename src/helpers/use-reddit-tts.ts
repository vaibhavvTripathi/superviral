import { useCallback } from "react";

export const useRedditTTS = () => {
  // Simulate TTS: always return the same dummy audio file
  const getAudio = useCallback(async (text: string) => {
    // In real implementation, call OpenAI TTS and return the audio file URL
    console.log(text);
    return "/outputs/dummy-audio.mp3";
  }, []);
  return { getAudio };
};
