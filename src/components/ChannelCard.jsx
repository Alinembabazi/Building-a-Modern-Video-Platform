import { Link } from "react-router-dom";

const ChannelCard = ({ channel }) => {
return (
  <Link to={`/channel/${channel.id.channelId}`}>
    <div className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition">
      <img
        src={channel.snippet.thumbnails.high.url}
        alt={channel.snippet.title}
        className="rounded-full w-24 h-24 mx-auto mb-2 object-cover"/>
      <h3 className="font-semibold">{channel.snippet.title}</h3>
    </div>
  </Link>
);
};

export default ChannelCard;
