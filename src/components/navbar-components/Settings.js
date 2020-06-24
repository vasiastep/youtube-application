import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo, faBell, faEllipsisH, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from '../../context/Theme/ThemeContext'

export const Settings = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div>
      <FontAwesomeIcon
        title="Створити"
        icon={faVideo}
        style={{
          fontSize: '0.9em',
          marginRight: '1.5rem',
          cursor: 'pointer',
          color: theme === 'dark' ? '#fff' : '#202020',
        }}
      />
      <FontAwesomeIcon
        title="Додатки"
        icon={faEllipsisH}
        style={{
          fontSize: '0.9em',
          marginRight: '1.5rem',
          cursor: 'pointer',
          color: theme === 'dark' ? '#fff' : '#202020',
        }}
      />
      <FontAwesomeIcon
        title="Сповіщення"
        icon={faBell}
        style={{
          fontSize: '0.9em',
          marginRight: '1.5rem',
          cursor: 'pointer',
          color: theme === 'dark' ? '#fff' : '#202020',
        }}
      />
      <FontAwesomeIcon
        icon={faUserCircle}
        style={{
          fontSize: '0.9em',
          marginRight: '1.5rem',
          cursor: 'pointer',
          color: theme === 'dark' ? '#fff' : '#202020',
        }}
      />
    </div>
  )
}
