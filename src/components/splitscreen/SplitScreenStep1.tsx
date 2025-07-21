import React, { useRef, useState } from "react";
import { useSplitScreenStore } from "../../store/splitScreenStore";
import { Player } from "@remotion/player";
import { SplitScreenVideo } from "../../remotion/SplitScreenVideo";

const ASPECT_RATIOS = [
  { label: "9:16 (TikTok/Reels)", value: "9:16" },
  { label: "1:1 (Square)", value: "1:1" },
  { label: "16:9 (YouTube)", value: "16:9" },
];

const getDimensions = (aspectRatio: string) => {
  if (aspectRatio === "9:16") return { width: 720, height: 1280 };
  if (aspectRatio === "1:1") return { width: 1080, height: 1080 };
  return { width: 1280, height: 720 };
};

const DURATION_IN_FRAMES = 780;
const VIDEO_FPS = 30;

const VIDEO_OPTIONS: { label: string; value: string; thumb: string }[] = [
  {
    label: "Nature Forest",
    value:
      "https://res.cloudinary.com/dpyd3p4oh/video/upload/v1752933402/v1_ikazoq.mp4",
    thumb: "/thumbnails/v1.png",
  },
  {
    label: "City Timelapse",
    value:
      "https://res.cloudinary.com/dpyd3p4oh/video/upload/v1752933415/v2_uncu3f.mp4",
    thumb: "/thumbnails/v2.png",
  },
];

type VideoOption = {
  label: string;
  value: string;
  thumb: string;
  isUploaded?: boolean;
};

function useVideoDropdown(
  selected: string,
  setSelected: (v: string) => void,
  label: string,
) {
  const [open, setOpen] = useState(false);
  const [uploaded, setUploaded] = useState<VideoOption | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const options: VideoOption[] = uploaded
    ? [...VIDEO_OPTIONS, uploaded]
    : VIDEO_OPTIONS;
  const selectedOption = options.find((v) => v.value === selected);

  const handleFile = (file: File) => {
    const url = URL.createObjectURL(file);
    setUploaded({
      label: file.name,
      value: url,
      thumb: url,
      isUploaded: true,
    });
    setSelected(url);
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <div className="relative">
        <button
          type="button"
          className="w-full border rounded p-2 flex items-center gap-2 bg-white"
          onClick={() => setOpen((o) => !o)}
        >
          {selectedOption ? (
            <>
              <video
                src={selectedOption.value}
                className="w-10 h-10 object-cover rounded mr-2"
                muted
                playsInline
                style={{ background: "#eee" }}
              />
              <span className="truncate">{selectedOption.label}</span>
            </>
          ) : (
            <span className="text-gray-400">Select a video...</span>
          )}
          <span className="ml-auto">▼</span>
        </button>
        {open && (
          <div className="absolute z-10 bg-white border rounded shadow w-full mt-1 max-h-60 overflow-auto">
            {options.map((v: VideoOption) => (
              <button
                key={v.value}
                type="button"
                className={`flex items-center w-full px-2 py-2 gap-2 hover:bg-blue-50 ${selected === v.value ? "bg-blue-100" : ""}`}
                onClick={() => {
                  setSelected(v.value);
                  setOpen(false);
                }}
              >
                <video
                  src={v.value}
                  className="w-10 h-10 object-cover rounded"
                  muted
                  playsInline
                  style={{ background: "#eee" }}
                />
                <span className="truncate">{v.label}</span>
                {v.isUploaded && (
                  <span className="ml-2 text-xs text-green-600">
                    (uploaded)
                  </span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
      <div
        className="mt-2 border-2 border-dashed rounded p-4 text-center cursor-pointer bg-gray-50 hover:bg-gray-100"
        onClick={() => inputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <input
          type="file"
          accept="video/*"
          className="hidden"
          ref={inputRef}
          onChange={handleUpload}
        />
        <div className="text-gray-500">
          Drag & drop or click to upload a video
        </div>
      </div>
    </div>
  );
}

export const SplitScreenStep1 = ({ onNext }: { onNext: () => void }) => {
  const foregroundVideo = useSplitScreenStore((s) => s.foregroundVideo);
  const setForegroundVideo = useSplitScreenStore((s) => s.setForegroundVideo);
  const backgroundVideo = useSplitScreenStore((s) => s.backgroundVideo);
  const setBackgroundVideo = useSplitScreenStore((s) => s.setBackgroundVideo);
  const aspectRatio = useSplitScreenStore((s) => s.aspectRatio);
  const setAspectRatio = useSplitScreenStore((s) => s.setAspectRatio);
  const splitPosition = useSplitScreenStore((s) => s.splitPosition);
  const setSplitPosition = useSplitScreenStore((s) => s.setSplitPosition);
  const caption = useSplitScreenStore((s) => s.caption);

  const { width, height } = getDimensions(aspectRatio);

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Left: Settings */}
      <div className="flex-1 bg-white rounded-lg shadow p-6 min-w-[320px]">
        <h2 className="text-xl font-semibold mb-4">Split Screen Setup</h2>
        {useVideoDropdown(
          foregroundVideo,
          setForegroundVideo,
          "Foreground Video",
        )}
        {useVideoDropdown(
          backgroundVideo,
          setBackgroundVideo,
          "Background Video",
        )}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Aspect Ratio</label>
          <div className="flex gap-2">
            {ASPECT_RATIOS.map((r) => (
              <button
                key={r.value}
                type="button"
                className={`border rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-150 ${
                  aspectRatio === r.value
                    ? "border-blue-600 ring-2 ring-blue-300"
                    : "border-gray-200"
                }`}
                onClick={() =>
                  setAspectRatio(
                    r.value as import("../../store/splitScreenStore").SplitScreenAspectRatio,
                  )
                }
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Split Position
          </label>
          <div className="flex gap-2">
            <button
              type="button"
              className={`border rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-150 ${
                splitPosition === "top"
                  ? "border-blue-600 ring-2 ring-blue-300"
                  : "border-gray-200"
              }`}
              onClick={() => setSplitPosition("top")}
            >
              Top
            </button>
            <button
              type="button"
              className={`border rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-150 ${
                splitPosition === "bottom"
                  ? "border-blue-600 ring-2 ring-blue-300"
                  : "border-gray-200"
              }`}
              onClick={() => setSplitPosition("bottom")}
            >
              Bottom
            </button>
          </div>
        </div>
        <button
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded font-semibold"
          onClick={onNext}
          disabled={!foregroundVideo || !backgroundVideo}
        >
          Next: Write Script
        </button>
      </div>
      {/* Right: Preview */}
      <div className="flex-1 min-w-[320px] flex items-center justify-center">
        <div className="bg-gray-100 rounded-lg shadow p-6 w-full h-full flex items-center justify-center">
          {foregroundVideo && backgroundVideo ? (
            <Player
              component={SplitScreenVideo}
              inputProps={{
                foregroundVideo,
                backgroundVideo,
                aspectRatio,
                splitPosition,
                caption,
              }}
              durationInFrames={DURATION_IN_FRAMES}
              fps={VIDEO_FPS}
              compositionHeight={height}
              compositionWidth={width}
              style={{
                width: width < height ? 270 : 480,
                height: width < height ? 480 : 270,
                maxWidth: width < height ? 270 : 480,
                maxHeight: width < height ? 480 : 270,
                borderRadius: 12,
                boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
              }}
              controls
            />
          ) : foregroundVideo || backgroundVideo ? (
            <Player
              component={() => (
                <video
                  src={foregroundVideo || backgroundVideo}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    background: "#000",
                  }}
                  controls
                  autoPlay
                  muted
                  loop
                />
              )}
              durationInFrames={DURATION_IN_FRAMES}
              fps={VIDEO_FPS}
              compositionHeight={height}
              compositionWidth={width}
              style={{
                width: width < height ? 270 : 480,
                height: width < height ? 480 : 270,
                maxWidth: width < height ? 270 : 480,
                maxHeight: width < height ? 480 : 270,
                borderRadius: 12,
                boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
              }}
              controls
            />
          ) : (
            <div className="text-gray-400 text-center w-full">
              Select at least one video to preview.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
