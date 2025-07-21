import { NextRequest } from "next/server";
import { renderMedia } from "@remotion/renderer";
import path from "path";
import fs from "fs";
import {
  VIDEO_WIDTH,
  VIDEO_HEIGHT,
  VIDEO_FPS,
  DURATION_IN_FRAMES,
} from "../../../../types/constants";

export const dynamic = "force-dynamic";



export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { inputProps, width, height } = body;
    const w = width || VIDEO_WIDTH;
    const h = height || VIDEO_HEIGHT;
    const compositionId = "RedditStory";
    console.log(compositionId);
    // Path to the Remotion bundle
    const remotionRoot = path.join(process.cwd(), "src", "remotion", "bundle");
    const outputDir = path.join(process.cwd(), "output");
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir);
    }
    const outputPath = path.join(outputDir, `reddit-story-${Date.now()}.mp4`);

    await renderMedia({
      serveUrl: remotionRoot,
      codec: "h264",
      inputProps,
      composition: {
        id: compositionId,
        width: w,
        height: h,
        fps: VIDEO_FPS,
        durationInFrames: DURATION_IN_FRAMES,
        defaultProps: {},
        props: inputProps,
        defaultCodec: "h264",
        defaultOutName: "out.mp4",
        defaultVideoImageFormat: "jpeg",
        defaultPixelFormat: "yuv420p",
      },
      outputLocation: outputPath,
    });

    return new Response(JSON.stringify({ success: true, file: outputPath }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: unknown) {
    console.log(err);
    let message = "Failed to render video";
    if (
      err &&
      typeof err === "object" &&
      "message" in err &&
      typeof (err as { message?: unknown }).message === "string"
    ) {
      message = (err as { message: string }).message;
    }
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
