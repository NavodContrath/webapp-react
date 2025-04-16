import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layout/DefaultLayout'
import HomePage from './pages/HomePage'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={DefaultLayout}>
            <Route path='/' Component={HomePage} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
