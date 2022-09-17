import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './components/pages/Home';
import Eventos from './components/pages/Eventos';
import Quienes from './components/pages/Quienes';
import Contacto from './components/pages/Contacto';
import Video from './components/pages/Video';


function App() {
  return (
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/eventos' element={<Eventos />} />
            <Route path='/quienes' element={<Quienes />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/video' element={<Video />} />
          </Routes>
        </Router>
  );
}

export default App;
