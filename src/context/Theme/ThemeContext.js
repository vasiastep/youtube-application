import React, { createContext, useReducer } from 'react'
import { ThemeReducer } from './ThemeReducer'
import { SET_DARK_THEME, SET_LIGHT_THEME } from '../CONSTS_AND_TYPES'

export const ThemeContext = createContext()

const initialTheme = {
  theme: 'dark',
}

export const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ThemeReducer, initialTheme)

  const setDarkTheme = () => {
    dispatch({ type: SET_DARK_THEME })
  }
  const setLightTheme = () => {
    dispatch({ type: SET_LIGHT_THEME })
  }

  return (
    <ThemeContext.Provider
      value={{
        setDarkTheme,
        setLightTheme,
        theme: state.theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
