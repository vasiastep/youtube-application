import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { VideoContext } from '../../context/Videos/VideoContext'
import { ThemeContext } from '../../context/Theme/ThemeContext'

export const FindVideo = () => {
  const { fetchVideos, inputValue, setInputValue } = useContext(VideoContext)
  const { theme } = useContext(ThemeContext)
  const history = useHistory()

  const btnStyles = {
    backgroundColor: theme === 'dark' ? '#313131' : '',
  }
  const inputStyles = {
    padding: '3px',
    backgroundColor: theme === 'dark' ? 'rgb(20, 20, 20)' : '',
    color: theme === 'dark' ? '#fff' : '#000',
    border: theme === 'dark' ? 'none' : '1px solid #ccc !important',
  }

  const submitHandler = (e) => {
    e.preventDefault()
    goToHomePage()

    fetchVideos(inputValue)
  }

  const goToHomePage = () => {
    if (history.location.pathname !== '/home') {
      history.push('/home')
    }
    return
  }

  return (
    <form className="input-group input" onSubmit={submitHandler}>
      <input
        type="text"
        className="form-control input"
        placeholder="Пошук"
        style={inputStyles}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="input-group-append">
        <button
          title="Find"
          className="btn btn-outline-secondary d-flex align-items-center input"
          type="submit"
          id="button-addon2"
          style={btnStyles}
        >
          <FontAwesomeIcon icon={faSearch} size="xs" />
        </button>
      </div>
    </form>
  )
}
