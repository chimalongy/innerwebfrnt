import React from 'react'
import Home from './Routes/Home'
import About from "./Routes/About"
import Contact from './Routes/Contact';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
    <nav style={{display:"flex", gap:"10px"}}>
        <Link to="/"  >Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </nav>

    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
</Router>
  )
}

export default App