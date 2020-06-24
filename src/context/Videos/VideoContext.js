import React, { useReducer } from 'react'
import { VideoReducer } from './VideoReducer'
import { SELECT_VIDEO, API_KEY, FETCH_VIDEOS, SET_INPUT, CLEAR_INPUT } from '../CONSTS_AND_TYPES'
import youtube from './youtube'

export const VideoContext = React.createContext()

const initialVideoState = {
  inputValue: '',
  videos: [],
  selectedVideo: null,
  likedVideos: [],
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

    const lastQueriesSet = new Set()
    const lastQueriesArray = JSON.parse(localStorage.getItem('queries')) || []
    lastQueriesArray.push(query.toLowerCase())
    lastQueriesArray.forEach((q) => lastQueriesSet.add(q))
    localStorage.setItem('queries', JSON.stringify([...lastQueriesSet]))
  }

  const selectVideo = (video) => {
    dispatch({ type: SELECT_VIDEO, payload: video })
  }

  const setInputValue = (value) => {
    dispatch({ type: SET_INPUT, payload: value })
  }

  const clearInputValue = () => {
    dispatch({ type: CLEAR_INPUT })
  }

  const defaultFetch = async () => {
    const queries = JSON.parse(localStorage.getItem('queries')) || ['cats']

    Promise.all(
      queries.map(async (query, index, qArr) => {
        const response = await youtube.get('search', {
          params: {
            part: 'snippet',
            maxResults: Math.round(20 / qArr.length),
            q: query,
            key: API_KEY,
          },
        })
        return response
      })
    )
      .then((values) => {
        const videosShowed = values
          .map((response) => response.data.items)
          .flat()
          .filter((video) => video.id.kind === 'youtube#video')

        const uniqueVideos = videosShowed.filter(
          (v, i, a) => a.findIndex((t) => t.id.videoId === v.id.videoId) === i
        )

        return uniqueVideos
      })
      .then((videos) => dispatch({ type: FETCH_VIDEOS, payload: videos }))
  }

  return (
    <VideoContext.Provider
      value={{
        videos: state.videos,
        selected: state.selectedVideo,
        fetchVideos,
        selectVideo,
        setInputValue,
        clearInputValue,
        inputValue: state.inputValue,
        fetchVideosOnLoad: defaultFetch,
      }}
    >
      {children}
    </VideoContext.Provider>
  )
}
