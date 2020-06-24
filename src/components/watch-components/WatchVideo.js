import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from '../../context/Theme/ThemeContext'

export const WatchVideo = ({ video }) => {
  const { theme } = useContext(ThemeContext)
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  const textStyle = {
    color: theme === 'dark' ? '#fff' : '#000',
  }
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
        <p style={textStyle} className="d-flex justify-content-between">
          <span>
            {video.snippet.title} - {video.snippet.channelTitle}
          </span>
          <span>
            <FontAwesomeIcon
              title="Добавити в список вподобань"
              icon={faThumbsUp}
              style={{
                fontSize: '0.9em',
                marginRight: '1.5rem',
                cursor: 'pointer',
                color: theme === 'dark' ? '#fff' : '#202020',
              }}
            />
            <FontAwesomeIcon
              title="Не подобається"
              icon={faThumbsDown}
              style={{
                fontSize: '0.9em',
                marginRight: '1.5rem',
                cursor: 'pointer',
                color: theme === 'dark' ? '#fff' : '#202020',
              }}
            />
          </span>
        </p>
        <p style={textStyle}>
          Опубліковано: {new Date(video.snippet.publishTime).toLocaleDateString()}
        </p>
      </div>
    </div>
  )
}
