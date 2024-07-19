import './App.css';
import React, {useEffect, useState} from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Lakes from './pages/Lakes';
import Gallery from './pages/Gallery';
import Rates from './pages/Rates';
import Contact from './pages/Contact';
import Logo from './components/Logo';
import image from './images/IMG_015.jpg';
import ReactGA from 'react-ga4';

const trackingId = 'G-43HG1LEHWE';
ReactGA.initialize(trackingId);

function App() {
  const [isLoading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  

  useEffect(() => {  
    const query = new URLSearchParams(location.search);
    const path = query.get("redirect");
    if (path && location.pathname === '/') {
      navigate('/' + path);
    }
    setLoading(false);
  }, [location, navigate]);

  useEffect(() => {
    let pageName = "";
    switch (window.location.pathname) {
      case '/':
        pageName = "Home";
        break;
      case '/about':
        pageName = "About";
        break;
      case '/lakes':
        pageName = "Lakes";
        break;
      case '/gallery':
        pageName = "Gallery";
        break;
      case '/rates':
        pageName = "Rates";
        break;
      case '/contact':
        pageName = "Contact";
        break;
      default:
        pageName = "Unknown";
        break;
    }
  
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname, title: pageName});
  }, [location]);

  if (isLoading) {
    return null; // Render nothing or a loading spinner while isLoading is true
  }

  return (
    <div className='main-content'>
      <Navbar />
      <div className='parent-container'>
        <Logo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/lakes" element={<Lakes />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/rates" element={<Rates />} />
          <Route path="/contact" element={<Contact contactImage={image}/>} />
        </Routes>
      </div>
      <Footer />
      </div>
  );
}

export default App;
