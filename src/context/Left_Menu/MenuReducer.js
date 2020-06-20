import { TOGGLE_MENU } from '../CONSTS_AND_TYPES'

export const MenuReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        bigger: !state.bigger,
      }
    default:
      return state
  }
}
