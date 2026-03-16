// src/components/VideoCard.jsx

import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  if (!video?.id?.videoId) return null;

  return (
    <Link to={`/video/${video.id.videoId}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
        <img
          src={video.snippet.thumbnails.high.url}
          alt={video.snippet.title}
          className="w-full h-48 object-cover"/>
        <div className="p-3">
          <h3 className="font-semibold text-sm mb-1 line-clamp-2">
            {video.snippet.title}
          </h3>
          <p className="text-gray-600 text-xs">
            {video.snippet.channelTitle}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
