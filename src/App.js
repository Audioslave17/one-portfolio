import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Experience from './components/Experience';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import SocilaLinks from './components/SocilaLinks';
import Contact from './components/Contact';
import Social from './projects/Social';
import Chiran from './projects/Chiran';
import Trip from './projects/Trip';
import Mast from './projects/Mast';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>
          <NavBar />
          <Home />
          <About />
          <Portfolio />
          <Experience />
          <Contact />
          <SocilaLinks />
        </>} />
        <Route path="/social" element={<Social />} />
        <Route path='/chiran' element={<Chiran/>}/>
        <Route path='/mast' element={<Mast/>}/>
        <Route path='/trip' element={<Trip/>}/>
      </Routes>
    </Router>
  );
}

export default App;
