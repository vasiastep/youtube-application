import React, { useContext } from 'react'
import { MenuContext } from '../../context/Left_Menu/MenuContext'

export const ToggleMenu = () => {
  const { toggleMenu } = useContext(MenuContext)
  return (
    <div className="toggle-menu-btn" onClick={toggleMenu}>
      <div className="btn-elem"></div>
    </div>
  )
}
