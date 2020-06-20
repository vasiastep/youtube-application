import React from 'react'
import { ToggleMenu } from './ToggleMenu'
import { Logo } from './Logo'
import { FindVideo } from './FindVideo'
import { Settings } from './Settings'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <div className="custom-nav bg-dark">
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
