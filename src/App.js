import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { MenuContextProvider } from './context/Left_Menu/MenuContext'
import { VideoContextProvider } from './context/Videos/VideoContext'
import { HomePage } from './pages/Home'
import { WatchPage } from './pages/WatchPage'
import { Navbar } from './components/navbar-components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <VideoContextProvider>
          <MenuContextProvider>
            <Navbar />
            <Switch>
              <Route path="/home">
                <HomePage />
              </Route>
              <Route path="/watch">
                <WatchPage />
              </Route>
              <Redirect to="home" />
            </Switch>
          </MenuContextProvider>
        </VideoContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
