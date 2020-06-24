import React, { useContext } from 'react'
import { ToggleMenu } from './ToggleMenu'
import { Logo } from './Logo'
import { FindVideo } from './FindVideo'
import { Settings } from './Settings'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../context/Theme/ThemeContext'

export const Navbar = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <div className={`custom-nav ${theme === 'dark' ? 'bg-dark' : ''}`}>
        <div className="d-flex ml-4">
          <ToggleMenu />
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <Logo />
          </Link>
        </div>
        <span className="find-wrap">
          <FindVideo />
        </span>
        <span className="text-white">
          <Settings />
        </span>
      </div>
    </>
  )
}
