import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { VideoContext } from '../../context/Videos/VideoContext'

export const VideoItem = ({ video, smaller }) => {
  const { selectVideo } = useContext(VideoContext)

  const smallerStyles = {
    height: '50px',
    width: '89px',
    background: `url(${video.snippet.thumbnails.medium.url}) no-repeat`,
    backgroundSize: 'cover',
    marginTop: '1em',
  }

  const biggerStyles = {
    height: '100px',
    width: '177px',
    background: `url(${video.snippet.thumbnails.medium.url}) no-repeat`,
    backgroundSize: 'cover',
  }

  const clickHandler = (event) => {
    event.stopPropagation()

    selectVideo(video)
  }

  if (smaller && video.id.channelId) {
    return null
  }

  if (video.id.kind === 'youtube#channel') {
    biggerStyles.width = '100px'
    biggerStyles.borderRadius = '50%'
    return (
      <>
        <div onClick={clickHandler}>
          <div className="d-flex video-item">
            <div style={biggerStyles}></div>
            <div className="video-info ml-2">
              <b>{video.snippet.title}</b>
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
      <div onClick={clickHandler}>
        <Link to="/watch" style={{ textDecoration: 'none' }}>
          <div className={`d-flex ${smaller ? '' : 'video-item'}`}>
            <div style={!smaller ? biggerStyles : smallerStyles}></div>
            <div className="video-info ml-2">
              <b>{video.snippet.title}</b>
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
