import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faFire,
  faImages,
  faClone,
  faHistory,
  faClock,
  faPlayCircle,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons'
import { MenuContext } from '../../context/Left_Menu/MenuContext'

export const LeftMenu = () => {
  const { biggerMenu } = useContext(MenuContext)
  const menuStyles = {
    width: '230px',
    height: '100vh',
    overflow: 'auto',
  }
  const smallMenuStyles = {
    width: '75px',
    height: '100vh',
    overflow: 'auto',
    paddingTop: '10px',
  }

  return (
    <>
      {!biggerMenu ? (
        <div className="bg-dark text-white" style={smallMenuStyles}>
          <p className="left-menu-item small-menu-item d-flex flex-column align-items-center p-2">
            <FontAwesomeIcon icon={faHome} style={{ fontSize: '20px' }} />
            <span style={{ fontSize: '10px' }}>Головна</span>
          </p>
          <p className="left-menu-item small-menu-item d-flex flex-column align-items-center">
            <FontAwesomeIcon icon={faFire} style={{ fontSize: '20px' }} />
            <span style={{ fontSize: '10px' }}>Популярне</span>
          </p>
          <p className="left-menu-item small-menu-item d-flex flex-column align-items-center">
            <FontAwesomeIcon icon={faImages} style={{ fontSize: '20px' }} />
            <span style={{ fontSize: '10px' }}>Підписки</span>
          </p>
          <p className="left-menu-item small-menu-item d-flex flex-column align-items-center">
            <FontAwesomeIcon icon={faClone} style={{ fontSize: '20px' }} />
            <span style={{ fontSize: '10px' }}>Бібліотека</span>
          </p>
        </div>
      ) : (
        <div className="bg-dark text-white" style={menuStyles}>
          <div>
            <p className="left-menu-item">
              <FontAwesomeIcon icon={faHome} style={{ marginRight: '10px' }} />
              Головна
            </p>
            <p className="left-menu-item">
              <FontAwesomeIcon icon={faFire} style={{ marginRight: '10px' }} />
              Популярне
            </p>
            <p className="left-menu-item">
              <FontAwesomeIcon icon={faImages} style={{ marginRight: '10px' }} />
              Підписки
            </p>
            <hr style={{ backgroundColor: '#ccc' }} />
            <p className="left-menu-item">
              <FontAwesomeIcon icon={faClone} style={{ marginRight: '10px' }} />
              Бібліотека
            </p>
            <p className="left-menu-item">
              <FontAwesomeIcon icon={faHistory} style={{ marginRight: '10px' }} />
              Історія
            </p>
            <p className="left-menu-item">
              <FontAwesomeIcon icon={faPlayCircle} style={{ marginRight: '10px' }} />
              Ваші відео
            </p>
            <p className="left-menu-item">
              <FontAwesomeIcon icon={faClock} style={{ marginRight: '10px' }} />
              Переглянути пізніше
            </p>
            <p className="left-menu-item">
              <FontAwesomeIcon icon={faThumbsUp} style={{ marginRight: '10px' }} />
              Відео, які сподобалися
            </p>
          </div>
        </div>
      )}
    </>
  )
}
