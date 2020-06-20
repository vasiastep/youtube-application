import React, { useContext } from 'react'
import { VideoContext } from '../../context/Videos/VideoContext'
import { VideosList } from './VideosList'

export const VideoContainer = () => {
  const { videos } = useContext(VideoContext)
  console.log(videos)

  return (
    <>
      <VideosList videos={videos} />
    </>
  )
}
