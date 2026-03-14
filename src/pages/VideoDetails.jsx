// src/pages/VideoDetails.jsx

import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import VideoPlayer from "../components/VideoPlayer";
import Loader from "../components/Loader";

const VideoDetails = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["video", id],
    queryFn: () =>
      fetchFromAPI(
        `videos?part=snippet,statistics&id=${encodeURIComponent(
          id
        )}`
      ),
  });

  if (isLoading) return <Loader />;

  const video = data.items[0];

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <VideoPlayer videoId={id} />

      <h2 className="font-bold text-2xl mt-4">{video.snippet.title}</h2>
      <p className="text-gray-600">{video.snippet.channelTitle}</p>
      <p className="mt-4">{video.snippet.description}</p>
    </div>
  );
};

export default VideoDetails;
