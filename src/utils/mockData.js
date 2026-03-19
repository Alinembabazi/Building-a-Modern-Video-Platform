export const getMockData = (url) => {
  const match = url.match(/q=([^&]*)/);
  const category = match ? decodeURIComponent(match[1]) : "New";
  if (url.includes("videos?")) {
    return {
      items: [
        {
          id: "dQw4w9WgXcQ",
          snippet: {
            title: `Awesome ${category} Video Tutorial`,
            channelTitle: "Modern Code Channel",
            description: "This is a detailed description of the video. It accurately plays requirements for YouTube using react-player. Thank you for watching!",
            thumbnails: {
              high: { url: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg" }
            }
          },
          statistics: { viewCount: "1500000", likeCount: "25000" }
        }
      ]
    };
  }
  const generateVideo = (title, id) => ({
    id: { videoId: id },
    snippet: {
      title: title,
      channelTitle: "Tech & Media Hub",
      thumbnails: {
        high: { url: `https://i.ytimg.com/vi/${id}/hqdefault.jpg` }
      }
    }
  });

  return {
    items: [
      generateVideo(`${category} Crash Course for Beginners 2026`, "jNQXAC9IVRw"),
      generateVideo(`Advanced ${category} Architecture Patterns`, "LXb3EKWsInQ"),
      generateVideo(`Why Everyone Uses ${category} in Production`, "M7lc1UVf-VE"),
      generateVideo(`Building a YouTube Clone with ${category}`, "kJQP7kiw5Fk"),
      generateVideo(`Top 10 ${category} Frameworks to Learn`, "9bZkp7q19f0"),
      generateVideo(`${category} Live Coding Session & Q&A`, "RgKAFK5djSk"),
      generateVideo(`Deploying ${category} Applications at Scale`, "dQw4w9WgXcQ"),
      {
        id: { channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw" },
        snippet: {
          title: `Official ${category} Channel`,
          thumbnails: {
            high: { url: "https://yt3.ggpht.com/ytc/AIdro_lzG8E8D29mngNpskP3A0u2F017kX6A02w8c13kSWe1tZ4=s800-c-k-c0x00ffffff-no-rj" }
          }
        }
      }
    ]
  };
};
