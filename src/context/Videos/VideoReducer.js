import { FETCH_VIDEOS, SELECT_VIDEO } from '../CONSTS_AND_TYPES'

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
    default:
      return state
  }
}
