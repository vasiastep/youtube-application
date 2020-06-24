import { FETCH_VIDEOS, SELECT_VIDEO, SET_INPUT, CLEAR_INPUT } from '../CONSTS_AND_TYPES'

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
    default:
      return state
  }
}
