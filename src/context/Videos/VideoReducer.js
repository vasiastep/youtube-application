import {
  FETCH_VIDEOS,
  SELECT_VIDEO,
  SET_INPUT,
  CLEAR_INPUT,
  ADD_TO_LIKED,
  REMOVE_FROM_LIKED,
} from '../CONSTS_AND_TYPES'

export const VideoReducer = (state, action) => {
  switch (action.type) {
    case FETCH_VIDEOS:
      return {
        ...state,
        videos: action.payload,
      }
    case SELECT_VIDEO:
      return {
        ...state,
        selectedVideo: action.payload,
      }
    case SET_INPUT:
      return {
        ...state,
        inputValue: action.payload,
      }
    case CLEAR_INPUT:
      return {
        ...state,
        inputValue: '',
      }
    case ADD_TO_LIKED:
      localStorage.setItem('liked', JSON.stringify([action.payload, ...state.likedVideos]))
      return {
        ...state,
        likedVideos: [action.payload, ...state.likedVideos],
      }
    case REMOVE_FROM_LIKED:
      const newLikedVideos = state.likedVideos.filter((video) => video.etag !== action.payload.etag)
      localStorage.setItem('liked', JSON.stringify(newLikedVideos))
      return {
        ...state,
        likedVideos: newLikedVideos,
      }
    default:
      return state
  }
}
