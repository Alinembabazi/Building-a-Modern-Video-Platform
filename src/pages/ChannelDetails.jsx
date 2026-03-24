
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import VideoCard from "../components/VideoCard";
import Loader from "../components/Loader";

const ChannelDetails = () => {
const { id } = useParams();

const { data, isLoading } = useQuery({
queryKey: ["channelVideos", id],
queryFn: () =>
  fetchFromAPI(
    `search?channelId=${encodeURIComponent(id)}&part=snippet&maxResults=20`
  ),
});

if (isLoading) return <Loader />;

return (
<div className="p-4 max-w-6xl mx-auto">
  <h2 className="text-2xl font-bold mb-4">Channel Videos</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {data?.items?.map((video) => (
      <VideoCard key={video.id.videoId} video={video} />
    ))}
  </div>
</div>
);
};

export default ChannelDetails;
