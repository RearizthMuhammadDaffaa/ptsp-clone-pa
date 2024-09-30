import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Syarat from './pages/Syarat'
import Panjar from './pages/Panjar'
import HitungPanjar from './pages/HitungPanjar'

function App() {


  return (
    <>
     <Header/>
     <Routes>
       <Route path='/' element={<Home />}/>
       <Route path='/syarat' element={<Syarat />}>
          <Route path='cerai_talak' element={<Syarat />}/>
       </Route>
       <Route path='/panjar'  element={<Panjar />}/>
       <Route path='/panjar/:radius'  element={<HitungPanjar />}/>
     </Routes>
     <Footer />
    </>
  )
}

export default App
