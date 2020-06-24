import React, { useContext } from 'react'
import { MenuContext } from '../../context/Left_Menu/MenuContext'
import { ThemeContext } from '../../context/Theme/ThemeContext'

export const ToggleMenu = () => {
  const { toggleMenu } = useContext(MenuContext)
  const { theme } = useContext(ThemeContext)

  const toggleMenuStyles = {
    height: '1px',
    width: '15px',
    backgroundColor: theme === 'dark' ? '#fff' : '#000',
    position: 'relative',
  }

  return (
    <div className="toggle-menu-btn" onClick={toggleMenu}>
      <div className="btn-elem" style={toggleMenuStyles}></div>
    </div>
  )
}
