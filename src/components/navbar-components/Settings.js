import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo, faBell, faEllipsisH, faUserCircle } from '@fortawesome/free-solid-svg-icons'

export const Settings = () => {
  return (
    <div>
      <FontAwesomeIcon
        title="Створити"
        icon={faVideo}
        style={{ fontSize: '0.9em', marginRight: '1.5rem', cursor: 'pointer' }}
      />
      <FontAwesomeIcon
        title="Додатки"
        icon={faEllipsisH}
        style={{ fontSize: '0.9em', marginRight: '1.5rem', cursor: 'pointer' }}
      />
      <FontAwesomeIcon
        title="Сповіщення"
        icon={faBell}
        style={{ fontSize: '0.9em', marginRight: '1.5rem', cursor: 'pointer' }}
      />
      <FontAwesomeIcon
        icon={faUserCircle}
        style={{ fontSize: '0.9em', marginRight: '1.5rem', cursor: 'pointer' }}
      />
    </div>
  )
}
