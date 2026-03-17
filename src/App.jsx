import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Feed from './pages/Feed'
import VideoDetails from './pages/VideoDetails'
import ChannelDetails from './pages/ChannelDetails'
import SearchFeed from './pages/SearchFeed'

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: '#0f0f0f', color: 'white' }}>
      <Navbar />

      <div style={{ flex: 1, overflow: 'hidden', display: 'flex' }}>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/channel/:id" element={<ChannelDetails />} />
          <Route path="/search/:query" element={<SearchFeed />} />
        </Routes>
      </div>

    </div>
  )
}

export default App;