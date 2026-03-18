// src/components/VideoCard.jsx

import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  if (!video?.id?.videoId) return null;

  return (
    <Link to={`/video/${video.id.videoId}`}>
      <div className="flex flex-col gap-3 cursor-pointer">
        <img
          src={video.snippet.thumbnails.high.url}
          alt={video.snippet.title}
          className="w-full h-48 md:h-44 lg:h-52 object-cover rounded-xl hover:rounded-none transition-all duration-300"
        />
        <div className="flex gap-3 px-1">
          {/* Faked Channel Avatar with First Letter */}
          <div className="w-9 h-9 rounded-full shrink-0 flex items-center justify-center bg-zinc-800 text-sm font-semibold text-zinc-300">
            {video.snippet.channelTitle ? video.snippet.channelTitle.charAt(0).toUpperCase() : "C"}
          </div>
          
          <div className="flex flex-col">
            <h3 className="font-semibold text-white text-[15px] leading-tight mb-1 line-clamp-2" dangerouslySetInnerHTML={{ __html: video.snippet.title }} />
            <p className="text-[#AAAAAA] text-sm hover:text-white transition-colors">
              {video.snippet.channelTitle}
            </p>
            <p className="text-[#AAAAAA] text-sm">
              {Math.floor(Math.random() * 900 + 10)}K views • {Math.floor(Math.random() * 11 + 1)} months ago
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
