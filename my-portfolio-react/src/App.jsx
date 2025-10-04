import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


// Global Page Components
import Header from './components/Header'
import Footer from './components/Footer'

// Global Pages Routes
import Homepage from './pages/Homepage'
import UXpage from './pages/UXpage'
import Error404 from './pages/Error404'
import WDpage from './pages/WDpage'
import Draftpage from './pages/draftpage'

// UX Pages Routes
import UXprojectsList from './pages/UXDesign/List'
import CraigslistWork from './pages/UXDesign/Craigslist'
import Freshii from './pages/UXDesign/Freshii'
import LAFitness from './pages/UXDesign/LAFitness'
import Loblaws from './pages/UXDesign/Loblaws'
import MMartinos from './pages/UXDesign/MammaMartinos'
import Gourmet from './pages/UXDesign/Gourmet'
import LocalsToronto from './pages/UXDesign/LocalsToronto'

// WD Pages Routes
import WDprojectsList from './pages/WebDevelopment/List'

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/UXpage' element={<UXpage/>}></Route>
        <Route path='/Error404' element={<Error404/>}></Route>
        <Route path='/WDpage' element={<WDpage/>}></Route>
        <Route path='/draftpage' element={<Draftpage/>}></Route>
        <Route path='/UXDesign/List' element={<UXprojectsList/>}></Route>
        <Route path='/UXDesign/Craigslist' element={<CraigslistWork/>}></Route>
        <Route path='/UXDesign/Freshii' element={<Freshii/>}></Route>
        <Route path='/UXDesign/Gourmet' element={<Gourmet/>}></Route>
        <Route path='/UXDesign/LocalsToronto' element={<LocalsToronto/>}></Route>
        <Route path='/UXDesign/LAFitness' element={<LAFitness/>}></Route>
        <Route path='/UXDesign/Loblaws' element={<Loblaws/>}></Route>
        <Route path='/UXDesign/MammaMartinos' element={<MMartinos/>}></Route>
        <Route path='/WebDevelopment/List' element={<WDprojectsList/>}></Route>
      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
