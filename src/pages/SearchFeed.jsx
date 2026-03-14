// src/pages/SearchFeed.jsx

import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import VideoCard from "../components/VideoCard";
import Loader from "../components/Loader";

const SearchFeed = () => {
  const { searchTerm } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["search", searchTerm],
    queryFn: () =>
      fetchFromAPI(
        `search?part=snippet&q=${encodeURIComponent(
          searchTerm
        )}&maxResults=20`
      ),
  });

  if (isLoading) return <Loader />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {data?.items?.map((video) => (
        <VideoCard key={video.id.videoId} video={video} />
      ))}
    </div>
  );
};

export default SearchFeed;
