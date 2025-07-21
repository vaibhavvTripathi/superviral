import React from "react";
import { useRedditStoryFormStore } from "../../store/redditStoryFormStore";

export const RedditStoryStep1 = ({ onNext }: { onNext: () => void }) => {
  const author = useRedditStoryFormStore((s) => s.author);
  const setAuthor = useRedditStoryFormStore((s) => s.setAuthor);
  const postTitle = useRedditStoryFormStore((s) => s.postTitle);
  const setPostTitle = useRedditStoryFormStore((s) => s.setPostTitle);
  const script = useRedditStoryFormStore((s) => s.script);
  const setScript = useRedditStoryFormStore((s) => s.setScript);

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Left: Form */}
      <div className="flex-1 bg-white rounded-lg shadow p-6 min-w-[320px]">
        <h2 className="text-xl font-semibold mb-4">
          Introduction Card (optional)
        </h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Reddit Username
          </label>
          <input
            className="w-full border rounded p-2"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter Reddit username"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Post Title</label>
          <input
            className="w-full border rounded p-2"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            placeholder="Enter post title"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Video Script</label>
          <textarea
            className="w-full border rounded p-2"
            rows={8}
            value={script}
            onChange={(e) => setScript(e.target.value)}
            placeholder="Paste or write your story script here"
          />
        </div>
        <button
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded font-semibold"
          disabled={
            author.length == 0 || script.length == 0 || postTitle.length === 0
          }
          onClick={onNext}
        >
          Next: Select Font
        </button>
      </div>
      {/* Right: Preview */}
      <div className="flex-1 min-w-[320px]">
        <h2 className="text-xl font-semibold mb-4">Preview Section</h2>
        <div className="bg-white rounded-lg shadow p-6 mb-4 flex flex-col items-center">
          {/* Reddit Post Preview - styled like Reddit */}
          <div
            style={{
              width: 420,
              maxWidth: "100%",
              background: "#fff",
              borderRadius: 12,
              boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
              padding: 16,
              display: "flex",
              alignItems: "flex-start",
              gap: 12,
              margin: "0 auto",
            }}
          >
            {/* Reddit Logo (smaller) */}
            <div style={{ flexShrink: 0 }}>
              <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="24" fill="#FF4500" />
                <ellipse cx="24" cy="32" rx="12" ry="6" fill="#fff" />
                <circle cx="17.5" cy="27.5" r="3.5" fill="#fff" />
                <circle cx="30.5" cy="27.5" r="3.5" fill="#fff" />
                <circle cx="17.5" cy="27.5" r="1.5" fill="#FF4500" />
                <circle cx="30.5" cy="27.5" r="1.5" fill="#FF4500" />
                <ellipse cx="24" cy="34" rx="5" ry="2" fill="#FF4500" />
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  color: "#878A8C",
                  fontSize: 13,
                  fontWeight: 500,
                  marginBottom: 4,
                }}
              >
                r/AskReddit
              </div>
              <div
                style={{
                  color: "#1A1A1B",
                  fontSize: 18,
                  fontWeight: 700,
                  marginBottom: 6,
                  lineHeight: 1.2,
                }}
              >
                {postTitle}
              </div>
              <div style={{ color: "#878A8C", fontSize: 13, fontWeight: 400 }}>
                Posted by{" "}
                <span style={{ color: "#0079D3", fontWeight: 500 }}>
                  u/{author}
                </span>
              </div>
              {/* Fake upvotes/comments bar */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginTop: 10,
                }}
              >
                <span style={{ color: "#878A8C", fontSize: 13 }}>⬆️ 12.3k</span>
                <span style={{ color: "#878A8C", fontSize: 13 }}>⬇️</span>
                <span style={{ color: "#878A8C", fontSize: 13 }}>💬 1.2k</span>
                <span style={{ color: "#878A8C", fontSize: 13 }}>Share</span>
              </div>
            </div>
          </div>
        </div>
        {/* Script Preview */}
        <div className="bg-gray-50 rounded-lg shadow p-6">
          <h3 className="font-semibold mb-2 text-gray-700">Script Preview</h3>
          <div className="whitespace-pre-line text-gray-800 text-base">
            {script}
          </div>
        </div>
      </div>
    </div>
  );
};
