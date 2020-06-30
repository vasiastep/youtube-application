import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { VideoContext } from '../../context/Videos/VideoContext'
import { ThemeContext } from '../../context/Theme/ThemeContext'

export const VideoItem = ({ video, smaller }) => {
  const { selectVideo } = useContext(VideoContext)
  const { theme } = useContext(ThemeContext)

  const clickHandler = (event) => {
    event.stopPropagation()

    selectVideo(video)
  }

  if (smaller && video.id.channelId) {
    return null
  }

  if (video.id.kind === 'youtube#channel') {
    return (
      <>
        <div onClick={clickHandler}>
          <div className="d-flex video-item">
            <div
              className="bigger channel"
              style={{
                background: `url(${video.snippet.thumbnails.medium.url}) no-repeat`,
                backgroundSize: 'cover',
              }}
            ></div>
            <div
              className="video-info ml-2"
              style={{ color: theme === 'dark' ? '#aaa' : '#606060' }}
            >
              <b style={{ color: theme === 'dark' ? '#fff' : '#000' }}>{video.snippet.title}</b>
              <small>{video.snippet.channelTitle}</small>
              {!smaller ? (
                <small>
                  <i>{video.snippet.description}</i>
                </small>
              ) : null}
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div onClick={clickHandler} title={video.snippet.title}>
        <Link to="/watch" style={{ textDecoration: 'none' }}>
          <div className={`d-flex ${smaller ? '' : 'video-item'}`}>
            <div
              style={{
                background: `url(${video.snippet.thumbnails.medium.url}) no-repeat`,
                backgroundSize: 'cover',
              }}
              className={`${!smaller ? 'bigger' : 'smaller'}`}
            ></div>
            <div
              className="video-info ml-2"
              style={{ color: theme === 'dark' ? '#aaa' : '#606060' }}
            >
              <b style={{ color: theme === 'dark' ? '#fff' : '#000' }}>{video.snippet.title}</b>
              <small>{video.snippet.channelTitle}</small>
              {!smaller ? (
                <small>
                  <i>{video.snippet.description}</i>
                </small>
              ) : null}
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}
