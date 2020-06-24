import React, { useContext } from 'react'
import { LeftMenu } from '../components/left-menu-components/LeftMenu'
import { VideoContainer } from '../components/video-container/VideoContainer'
import { ThemeContext } from '../context/Theme/ThemeContext'

export const HomePage = () => {
  const { theme } = useContext(ThemeContext)

  const styles = {
    backgroundColor: theme === 'dark' ? '#181818' : '#F9F9F9',
  }

  return (
    <>
      <div className="d-flex" style={styles}>
        <LeftMenu />
        <VideoContainer />
      </div>
    </>
  )
}
