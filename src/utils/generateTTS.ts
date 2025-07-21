import fs from "fs";
import path from "path";
import textToSpeech, { protos } from "@google-cloud/text-to-speech";

const client = new textToSpeech.TextToSpeechClient();

export const generateTTS = async (text: string): Promise<string> => {
  const request: protos.google.cloud.texttospeech.v1.ISynthesizeSpeechRequest =
    {
      input: { text },
      voice: {
        languageCode: "en-US",
        name: "en-US-Wavenet-D",
      },
      audioConfig: {
        audioEncoding: protos.google.cloud.texttospeech.v1.AudioEncoding.MP3, // ✅ use enum here
      },
    };

  const [response] = await client.synthesizeSpeech(request);

  const audioPath = path.resolve("public/outputs/audio-" + Date.now() + ".mp3");
  if (!response.audioContent) {
    throw new Error("No audio content received from TTS API");
  }
  await fs.promises.writeFile(audioPath, response.audioContent as Uint8Array);

  return audioPath;
};
