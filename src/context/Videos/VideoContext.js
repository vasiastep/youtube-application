import React, { useReducer } from 'react'
import { VideoReducer } from './VideoReducer'
import { SELECT_VIDEO, API_KEY, FETCH_VIDEOS } from '../CONSTS_AND_TYPES'
import youtube from './youtube'

export const VideoContext = React.createContext()

const initialVideoState = {
  videos: [],
  selectedVideo: null,
}

export const VideoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(VideoReducer, initialVideoState)

  const fetchVideos = async (query) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 10,
        q: query,
        key: API_KEY,
      },
    })

    dispatch({ type: FETCH_VIDEOS, payload: response.data.items })
  }

  const selectVideo = (video) => {
    dispatch({ type: SELECT_VIDEO, payload: video })
  }

  return (
    <VideoContext.Provider
      value={{
        videos: state.videos,
        selected: state.selectedVideo,
        fetchVideos,
        selectVideo,
      }}
    >
      {children}
    </VideoContext.Provider>
  )
}
