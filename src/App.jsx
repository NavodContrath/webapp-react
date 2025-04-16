import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layout/DefaultLayout'
import HomePage from './pages/HomePage'
import { GlobalProvider } from './contexts/GlobalContext'
import SingleMovie from './pages/SingleMovie'

function App() {


  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' Component={DefaultLayout}>
              <Route path='/' Component={HomePage} />
              <Route path='/movies/:id' Component={SingleMovie} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>

    </>
  )
}

export default App
