// src/App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Feed from "./pages/Feed";
import SearchFeed from "./pages/SearchFeed";
import VideoDetails from "./pages/VideoDetails";
import ChannelDetails from "./pages/ChannelDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
        <Route path="/video/:id" element={<VideoDetails />} />
        <Route path="/channel/:id" element={<ChannelDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
