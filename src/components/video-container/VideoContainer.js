import React, { useContext, useEffect } from 'react'
import { VideoContext } from '../../context/Videos/VideoContext'
import { VideosList } from './VideosList'

export const VideoContainer = () => {
  const { videos, fetchVideosOnLoad } = useContext(VideoContext)

  useEffect(() => {
    fetchVideosOnLoad()
    // eslint-disable-next-line
  }, [])

  // const myVideos = [
  //   {
  //     id: 'youtube#video',
  //     etag: Math.random() * 100000,
  //     snippet: {
  //       title: 'Video name',
  //       channelTitle: 'Channel title',
  //       thumbnails: {
  //         medium: {
  //           url:
  //             'https://i.ytimg.com/vi/5qap5aO4i9A/hq720_live.jpg?sqp=CPTXxvcF-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBtc6MgIb9uWEL5e6rBsQAxJHpPwQ',
  //         },
  //       },
  //     },
  //   },
  // ]

  return (
    <>
      <VideosList videos={videos} />
    </>
  )
}
