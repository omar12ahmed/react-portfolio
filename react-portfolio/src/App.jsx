import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap'
import { createFactory, useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
// import './App.css'
import Header from './components/Header'
import Home from"./components/pages/Home"
import Work from "./components/pages/Work"
import Contact from "./components/pages/Contact"
import About from './components/pages/About';
import ProjectGallery from "./components/ProjectGallery"



function App() {

    return (
  <Router>
    <ProjectGallery/>
    <Header />
    <Routes>
      <Route path="/" element= {<Home />}/>
      <Route path="about" element= {<About/>}/>
      <Route path= "work" element={<Work/>}/>

      <Route path= "/contact/*" element= {<Contact/>}/>
      <ProjectGallery path="Project" element={<ProjectGallery/>}/>
    </Routes>
  </Router>
  
  

  )
}

export default App
