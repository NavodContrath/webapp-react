import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layout/DefaultLayout'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={DefaultLayout}>

          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
