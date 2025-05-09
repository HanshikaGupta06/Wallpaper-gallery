import React from 'react'
import Navbar from './component/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Favourite from './pages/Favourite'
import Trending from './pages/Trending'
const App = () => {
  return (
    <>

      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
      </div>
    </>
  )
}

export default App