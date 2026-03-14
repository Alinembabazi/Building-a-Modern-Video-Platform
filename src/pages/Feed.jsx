// src/pages/Feed.jsx
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchFromAPI } from "../utils/fetchFromAPI"; // named import must match export
import Sidebar from "../components/Sidebar";
import VideoCard from "../components/VideoCard";
import Loader from "../components/Loader";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");

  const { data, isLoading } = useQuery({
    queryKey: ["videos", selectedCategory],
    queryFn: () =>
      fetchFromAPI(
        `search?part=snippet&q=${encodeURIComponent(
          selectedCategory
        )}&maxResults=20`
      ),
  });

  if (isLoading) return <Loader />;

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {data?.items?.map((video) => (
          <VideoCard key={video.id.videoId || video.id.channelId} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
