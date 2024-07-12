import './App.css';
import React, {useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Lakes from './pages/Lakes';
import Gallery from './pages/Gallery';
import Rates from './pages/Rates';
import Contact from './pages/Contact';
import Logo from './components/Logo';
import ReactGA from 'react-ga4';

const trackingId = 'G-8L9JH46KXZ';
ReactGA.initialize(trackingId);

function App() {
  

  useEffect(() => {
    console.log("Heyy")
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search});
  }, []);

  return (
    <div>
      <Navbar />
      <div className='parent-container'>
        <Logo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/lakes" element={<Lakes />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/rates" element={<Rates />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
      </div>
  );
}

export default App;
