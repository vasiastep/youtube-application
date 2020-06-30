import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
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
  faYinYang,
} from '@fortawesome/free-solid-svg-icons'
import { MenuContext } from '../../context/Left_Menu/MenuContext'
import { ThemeContext } from '../../context/Theme/ThemeContext'

export const LeftMenu = () => {
  const { biggerMenu } = useContext(MenuContext)
  const { theme, setDarkTheme, setLightTheme } = useContext(ThemeContext)
  const menuStyles = {
    width: '230px',
    height: '100vh',
    overflow: 'auto',
    color: theme === 'dark' ? '#fff' : '#000',
    backgroundColor: theme === 'dark' ? '#343A40' : '#fff',
  }
  const linkStyles = {
    color: theme === 'dark' ? '#fff' : '#000',
    textDecoration: 'none',
  }
  const smallMenuStyles = {
    width: '75px',
    height: '100vh',
    overflow: 'auto',
    paddingTop: '10px',
    color: theme === 'dark' ? '#fff' : '#000',
    backgroundColor: theme === 'dark' ? '#343A40' : '#fff',
  }

  const changeTheme = () => {
    if (theme === 'dark') {
      setLightTheme()
    } else {
      setDarkTheme()
    }
  }

  if (window.screen.availWidth >= 480) {
    return (
      <>
        {!biggerMenu ? (
          <div className="left-menu" style={smallMenuStyles}>
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
          <div className="left-menu" style={menuStyles}>
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
              <Link to="/liked" style={linkStyles}>
                <p className="left-menu-item">
                  <FontAwesomeIcon icon={faThumbsUp} style={{ marginRight: '10px' }} />
                  Відео, які сподобалися *
                </p>
              </Link>
              <p className="left-menu-item" onClick={changeTheme}>
                <FontAwesomeIcon icon={faYinYang} style={{ marginRight: '10px' }} />
                Змінити тему на {theme === 'dark' ? 'світлу' : 'темну'} *
              </p>
            </div>
          </div>
        )}
      </>
    )
  } else {
    return biggerMenu ? (
      <div className="left-menu" style={menuStyles}>
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
          <Link to="/liked" style={linkStyles}>
            <p className="left-menu-item">
              <FontAwesomeIcon icon={faThumbsUp} style={{ marginRight: '10px' }} />
              Відео, які сподобалися *
            </p>
          </Link>
          <p className="left-menu-item" onClick={changeTheme}>
            <FontAwesomeIcon icon={faYinYang} style={{ marginRight: '10px' }} />
            Змінити тему на {theme === 'dark' ? 'світлу' : 'темну'} *
          </p>
        </div>
      </div>
    ) : null
  }
}
