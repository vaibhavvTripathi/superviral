import React from 'react';
import { useFakeChatStore } from '../../store/fakeChatStore';

const VIDEOS = [
  {
    label: 'Nature Forest',
    value: 'https://res.cloudinary.com/dpyd3p4oh/video/upload/v1752933402/v1_ikazoq.mp4',
    thumb: '/thumbnails/v1.png',
  },
  {
    label: 'City Timelapse',
    value: 'https://res.cloudinary.com/dpyd3p4oh/video/upload/v1752933415/v2_uncu3f.mp4',
    thumb: '/thumbnails/v2.png',
  },
];

const FakeChatStep2: React.FC<{ onBack?: () => void; onNext?: () => void }> = ({ onBack, onNext }) => {
  const selectedVideo = useFakeChatStore((s) => s.selectedVideo);
  const setSelectedVideo = useFakeChatStore((s) => s.setSelectedVideo);

  return (
    <div className="bg-white rounded-lg shadow p-6 w-full max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Select Background Video</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {VIDEOS.map((video) => (
          <button
            key={video.value}
            type="button"
            className={`rounded-lg border-2 p-2 transition-all duration-150 flex flex-col items-center ${selectedVideo === video.value ? 'border-blue-600 ring-2 ring-blue-300' : 'border-gray-200'}`}
            onClick={() => setSelectedVideo(video.value)}
          >
            <video
              src={video.value}
              poster={video.thumb}
              className="rounded w-full h-32 object-cover mb-2"
              muted
              loop
              autoPlay
              playsInline
            />
            <span className="font-medium">{video.label}</span>
          </button>
        ))}
      </div>
      <div className="flex gap-4">
        <button
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded font-semibold"
          onClick={onBack}
        >
          Back
        </button>
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded font-semibold"
          onClick={onNext}
          disabled={!selectedVideo}
        >
          Next: Select Audio & Generate
        </button>
      </div>
    </div>
  );
};

export default FakeChatStep2; 