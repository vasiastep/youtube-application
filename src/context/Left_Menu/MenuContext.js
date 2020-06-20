import React, { useReducer } from 'react'
import { MenuReducer } from './MenuReducer'
import { TOGGLE_MENU } from '../CONSTS_AND_TYPES'

export const MenuContext = React.createContext()
const initialMenuState = {
  bigger: true,
}

export const MenuContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MenuReducer, initialMenuState)

  const toggleMenu = () => {
    dispatch({ type: TOGGLE_MENU })
  }

  return (
    <MenuContext.Provider
      value={{
        biggerMenu: state.bigger,
        toggleMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}
