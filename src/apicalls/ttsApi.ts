import axios from 'axios';

/**
 * Calls the /api/audio endpoint to synthesize speech from text and voice.
 * @param text The text to convert to speech.
 * @param voice The selected voice (male/female).
 * @returns The base64-encoded MP3 audio content.
 */
export async function fetchTTS(text: string, voice: string): Promise<string> {
  const response = await axios.post('/api/audio', { text, voice });
  return response.data.audioContent;
} 