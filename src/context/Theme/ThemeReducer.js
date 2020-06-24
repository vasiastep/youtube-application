import { SET_DARK_THEME, SET_LIGHT_THEME } from '../CONSTS_AND_TYPES'

export const ThemeReducer = (state, action) => {
  switch (action.type) {
    case SET_DARK_THEME:
      return {
        ...state,
        theme: 'dark',
      }
    case SET_LIGHT_THEME:
      return {
        ...state,
        theme: 'light',
      }
    default:
      return state
  }
}
