import ReactPlayer from "react-player";

const VideoPlayer = ({ videoId }) => {
  return (
    <div className="w-full max-w-4xl mx-auto my-4">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoId}`}
        controls
        width="100%"
        height="500px"
      />
    </div>
  );
};

export default VideoPlayer;
