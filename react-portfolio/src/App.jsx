import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap'
import { createFactory, useState } from 'react'
import { BrowserRouter as Router, Route,Routes } from "react-router-dom"
// import './App.css'
import Header from './components/Header'
import Home from "./components/pages/Home"
import Contact from "./components/pages/Contact"
import About from './components/pages/About';
import ProjectGallery from "./components/pages/ProjectGallery"
import "./style.css"



function App() {

  return (
    <Router>
      
    
      <Header />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="/contact/*" element={<Contact />} />
        <Route path="Project-gallery" element={<ProjectGallery />} />
      </Routes>
    
    </Router>
  )
}

export default App
