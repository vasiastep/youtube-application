import React from 'react'
import { LeftMenu } from '../components/left-menu-components/LeftMenu'
import { VideoContainer } from '../components/video-container/VideoContainer'

export const HomePage = () => {
  return (
    <>
      <div className="d-flex">
        <LeftMenu />
        <VideoContainer />
      </div>
    </>
  )
}
