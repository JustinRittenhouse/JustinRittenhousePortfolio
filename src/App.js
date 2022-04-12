import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import { Home } from './views/Home'
import { Navbar } from './components/Navbar'

export const App = () => {

  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </main>
      <footer>

      </footer>
    </React.Fragment>
  )
}

