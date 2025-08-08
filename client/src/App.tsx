import './App.css'
import { Routes, Route } from 'react-router'
import Home from './components/home/Home'
import Robots from './components/robots/Robots'
import Members from './components/members/Members'
import Sponsors from './components/sponsors/Sponsors'
import Contact from './components/contact/Contact'
import Docs from './components/docs/Docs'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/robots" element={<Robots/>}/>
      <Route path="/sponsors" element={<Sponsors/>}/>
      <Route path="/members" element={<Members/>}/>
      <Route path="/docs" element={<Docs/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  )
}

export default App
