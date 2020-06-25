import React, { useContext } from 'react'
import { VideoContext } from '../context/Videos/VideoContext'
import { VideosList } from '../components/video-container/VideosList'
import { ThemeContext } from '../context/Theme/ThemeContext'

export const LikedVideos = () => {
  const { likedVideos } = useContext(VideoContext)
  const { theme } = useContext(ThemeContext)

  if (!likedVideos.length) {
    return (
      <div className="text-center pt-4">
        <h2>Here will be your liked videos</h2>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: theme === 'dark' ? '#181818' : '#F9F9F9', minHeight: '100vh' }}>
      <VideosList videos={likedVideos} />
    </div>
  )
}
