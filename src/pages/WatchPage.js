import React, { useContext } from 'react'
import { VideoContext } from '../context/Videos/VideoContext'
import { VideosList } from '../components/video-container/VideosList'
import { WatchVideo } from '../components/watch-components/WatchVideo'

export const WatchPage = () => {
  const { videos, selected } = useContext(VideoContext)
  const newVideoList = videos.filter((video) => video.etag !== selected.etag)

  return (
    <div className="d-flex justify-content-between">
      <WatchVideo video={selected} />
      <VideosList videos={newVideoList} smaller={true} />
    </div>
  )
}
