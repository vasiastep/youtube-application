import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { VideoContext } from '../../context/Videos/VideoContext'

export const FindVideo = () => {
  const { fetchVideos } = useContext(VideoContext)

  const [value, setValue] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (window.location.pathname !== '/home') {
      window.location.pathname = '/home'
    }

    fetchVideos(value)
  }

  return (
    <form className="input-group input" onSubmit={submitHandler}>
      <input
        type="text"
        className="form-control text-white input bg-dark-darker"
        placeholder="Пошук"
        style={{ padding: '3px' }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="input-group-append">
        <button
          title="Find"
          className="btn btn-outline-secondary d-flex align-items-center input bg-dark-lighter"
          type="submit"
          id="button-addon2"
        >
          <FontAwesomeIcon icon={faSearch} size="xs" />
        </button>
      </div>
    </form>
  )
}
