import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import { Home } from './views/Home'

export const App = () => {

  return (
    <React.Fragment>
      <header>

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

