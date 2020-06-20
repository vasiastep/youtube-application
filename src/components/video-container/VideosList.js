import React from 'react'
import { VideoItem } from './VideoItem'

export const VideosList = ({ videos, smaller }) => {
  return (
    <div className="video-list">
      {videos.map((video) => (
        <VideoItem key={video.etag} video={video} smaller={smaller} />
      ))}
    </div>
  )
}
