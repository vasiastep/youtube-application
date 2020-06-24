import React, { useContext } from 'react'
import { VideoContext } from '../context/Videos/VideoContext'
import { VideosList } from '../components/video-container/VideosList'
import { WatchVideo } from '../components/watch-components/WatchVideo'
import { ThemeContext } from '../context/Theme/ThemeContext'

export const WatchPage = () => {
  const { videos, selected } = useContext(VideoContext)
  const { theme } = useContext(ThemeContext)
  const newVideoList = videos.filter((video) => video.etag !== selected.etag)

  return (
    <>
      <div
        className="d-flex justify-content-between"
        style={{ backgroundColor: theme === 'dark' ? '#181818' : '#F9F9F9', height: '100vh' }}
      >
        <WatchVideo video={selected} />
        <VideosList videos={newVideoList} smaller={true} />
      </div>
    </>
  )
}
