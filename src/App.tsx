import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home, Search, Watch} from './pages'


function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/search" element={<Search/>}/>
    <Route path="/watch/:id" element={<Watch/>}/>
    <Route/>
    <Route/>

  </Routes>
  </BrowserRouter>
  )
}

export default App
