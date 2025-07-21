import textToSpeech from "@google-cloud/text-to-speech";

const client = new textToSpeech.TextToSpeechClient({
  apiKey: process.env.GOOGLE_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const text = body.text;
    const voiceType = body.voice || "male";
    if (!text) {
      return new Response(JSON.stringify({ error: "Missing 'text' in request body" }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Map 'male'/'female' to Google TTS gender and voice name
    let ssmlGender: "MALE" | "FEMALE" = "MALE";
    let voiceName = "en-US-Wavenet-D";
    if (voiceType === "female") {
      ssmlGender = "FEMALE";
      voiceName = "en-US-Wavenet-F";
    }

    const request = {
      input: { text },
      voice: { languageCode: "en-US", ssmlGender, name: voiceName },
      audioConfig: { audioEncoding: "MP3" as const },
    };

    const [response] = await client.synthesizeSpeech(request);
    const audioContent = response.audioContent;
    if (!audioContent) {
      return new Response(JSON.stringify({ error: "No audio content returned" }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Return audio as base64 string
    return new Response(JSON.stringify({ audioContent: Buffer.from(audioContent as Uint8Array).toString('base64') }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message || 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}