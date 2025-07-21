import { useMutation } from '@tanstack/react-query';
import { fetchTTS } from '../apicalls/ttsApi';

/**
 * Custom hook to synthesize speech from text and voice using the TTS API.
 * @returns A mutation object to trigger TTS and access result/status.
 */
export function useTTS() {
  return useMutation({
    mutationFn: ({ text, voice }: { text: string; voice: string }) => fetchTTS(text, voice),
  });
} 