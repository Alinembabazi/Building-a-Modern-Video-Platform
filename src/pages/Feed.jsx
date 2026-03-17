// import { useState } from 'react'
// import { useQuery } from '@tanstack/react-query'
// import { fetchFromAPI } from '../utils/fetchFromAPI'
// import Sidebar from '../components/Sidebar'
// import Categories from './constants/Categories'
// import VideoCard from '../components/VideoCard'
// import ChannelCard from '../components/ChannelCard'
// import Loader from '../components/Loader'

// const Feed = () => {
//   const [selectedCategory, setSelectedCategory] = useState('New')

//   const { data, isLoading, isError } = useQuery({
//     queryKey: ['feed', selectedCategory],
//     queryFn: () => fetchFromAPI(`search?part=snippet&q=${selectedCategory}&type=video,channel`),
//     staleTime: 1000 * 60 * 5,
//   })

//   return (
//     <div style={{ display: 'flex', width: '100%', height: '100%', overflow: 'hidden' }}>
//       <Sidebar
//         selectedCategory={selectedCategory}
//         setSelectedCategory={setSelectedCategory}
//       />
//       <div style={{ flex: 1, overflowY: 'auto', background: '#0f0f0f' }}>
//         <CategoryPills
//           selectedCategory={selectedCategory}
//           setSelectedCategory={setSelectedCategory}
//         />
//         {isLoading && <Loader />}
//         {isError && (
//           <div className="flex justify-center items-center h-64">
//             <p className="text-red-500 text-lg font-medium">
//               Something went wrong. Please try again later.
//             </p>
//           </div>
//         )}
//         {!isLoading && !isError && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 pb-24 md:pb-4">
//             {data?.items?.map((item, idx) => (
//               <div key={idx}>
//                 {item.id.videoId && <VideoCard video={item} />}
//                 {item.id.channelId && <ChannelCard channel={item} />}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Feed


// src/pages/Feed.jsx
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import Sidebar from '../components/Sidebar'
import { Categories } from '../constants/Categories'
import VideoCard from '../components/VideoCard'
import ChannelCard from '../components/ChannelCard'
import Loader from '../components/Loader'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')

  const { data, isLoading, isError } = useQuery({
    queryKey: ['feed', selectedCategory],
    queryFn: () =>
      fetchFromAPI(
        `search?part=snippet&q=${selectedCategory}&type=video,channel`
      ),
    staleTime: 1000 * 60 * 5, // 5 minutes
  })

  return (
    <div style={{ display: 'flex', width: '100%', height: '100%', overflow: 'hidden' }}>
      <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      
      <div style={{ flex: 1, overflowY: 'auto', background: '#0f0f0f' }}>
        {/* Render category buttons directly */}
        <div className="flex gap-2 p-4 overflow-x-auto">
          {Categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-700 text-gray-200'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Loader / Error / Video Grid */}
        {isLoading && <Loader />}
        {isError && (
          <div className="flex justify-center items-center h-64">
            <p className="text-red-500 text-lg font-medium">
              Something went wrong. Please try again later.
            </p>
          </div>
        )}

        {!isLoading && !isError && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 pb-24 md:pb-4">
            {data?.items?.map((item, idx) => (
              <div key={idx}>
                {item.id.videoId && <VideoCard video={item} />}
                {item.id.channelId && <ChannelCard channel={item} />}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Feed;