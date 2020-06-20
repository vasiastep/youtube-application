import React from 'react'

export const Logo = () => {
  return (
    <div
      className="ml-4 d-flex align-items-center"
      title="YouTube home page"
      style={{ cursor: 'pointer' }}
    >
      <div className="youtube-navbar" />
      <span className="ml-1 text-white">
        YouTube<sup className="text-secondary">UA</sup>
      </span>
    </div>
  )
}
