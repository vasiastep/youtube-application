import React from 'react'

export const WatchVideo = ({ video }) => {
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  return (
    <div className="p-3" style={{ height: '80vh', width: '80vw' }}>
      <iframe
        frameBorder="0"
        height="100%"
        width="100%"
        title="Video Player"
        src={videoSrc}
        allowFullScreen
      />
      <div className="video-details">
        <p>
          {video.snippet.title} - {video.snippet.channelTitle}
        </p>
        <p>Опубліковано: {new Date(video.snippet.publishTime).toLocaleDateString()}</p>
      </div>
    </div>
  )
}
