import React, { useContext } from 'react'
import { ThemeContext } from '../../context/Theme/ThemeContext'

export const Logo = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div
      className="ml-4 d-flex align-items-center"
      title="YouTube home page"
      style={{ cursor: 'pointer', color: theme === 'dark' ? '#fff' : '#000' }}
    >
      <div className="youtube-navbar" />
      <span className="ml-1">
        YouTube<sup className="text-secondary">UA</sup>
      </span>
    </div>
  )
}
