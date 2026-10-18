import React, { useState, useRef } from 'react';
import { Play, Video } from 'lucide-react';

interface ProjectVideoPlayerProps {
  videoUrl: string;
  posterImage: string;
  title: string;
  projectName: string;
}

export const ProjectVideoPlayer: React.FC<ProjectVideoPlayerProps> = ({
  videoUrl,
  posterImage,
  title,
  projectName
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
      setHasStarted(true);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
        <div>
          <span className="text-xs font-bold text-[#C7A76C] uppercase tracking-wider flex items-center gap-1.5">
            <Video className="w-4 h-4 text-[#075E54]" />
            <span>Cinematic Project Tour</span>
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-900 mt-0.5">
            {title || `${projectName} Introduction Video`}
          </h3>
        </div>
      </div>

      {/* Video Container */}
      <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-lg group">
        <video
          ref={videoRef}
          src={videoUrl}
          poster={posterImage}
          preload="metadata"
          className="w-full h-full object-cover"
          onEnded={() => setIsPlaying(false)}
          onPause={() => setIsPlaying(false)}
          onPlay={() => {
            setIsPlaying(true);
            setHasStarted(true);
          }}
          controls={hasStarted}
        />

        {/* Big Center Play Overlay before play starts */}
        {!isPlaying && (
          <div 
            onClick={togglePlay}
            className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center cursor-pointer transition-opacity group-hover:bg-black/30"
          >
            <div className="w-20 h-20 rounded-full bg-[#C7A76C] text-[#172522] flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
              <Play className="w-8 h-8 fill-current ml-1" />
            </div>
          </div>
        )}

        {/* Video Subtitle Bar */}
        <div className="absolute top-4 left-4 pointer-events-none">
          <span className="px-3 py-1 bg-black/70 backdrop-blur-md rounded-full text-white text-xs font-bold shadow-md">
            {projectName} • Official Video
          </span>
        </div>
      </div>

      <p className="text-xs text-gray-500 text-center">
        High-definition authentic developer walkthrough for {projectName}.
      </p>
    </div>
  );
};
