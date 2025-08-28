import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <div className="bg-[url('./src/assets/chatbg.avif')]   bg-cover">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/profile' element={<ProfilePage />}/>
      </Routes>

    </div>
  )
}

export default App