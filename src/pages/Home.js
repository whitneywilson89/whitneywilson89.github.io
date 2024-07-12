import React from 'react';
import './Home.css';
import ima from './../images/IMG_001.jpeg';
import image1 from './../images/IMG_002.jpg';
import image2 from './../images/IMG_003.jpg';
import image3 from './../images/IMG_004.jpg';
import HeaderLine from '../components/HeaderLine';
import Contact from './Contact';

const Home = () => {

  return (
    <div className="home">
      <header className="hero-section">
        <h2 className="subtitle">Lake Russell and Clark Hill Fishing Guide</h2>
        <img className="image" src={ima} alt="Fishing Guide" />
      </header>

      <section className="about-section">
        <HeaderLine header="About Wilson's Guide Service" />
        <div className="about-content">
          <div className="row">
            <div className="image-container">
              <img src={image1} alt="Luke Crappie" className="centered-image" />
            </div>
            <div className="text-container">
              <h4>TWO GENERATIONS OF GUIDING</h4>
              <span className="left-aligned-text">Both Wendell and his son Luke are professional fishing guides on Lakes Russell and Clark Hill</span>
            </div>
          </div>
          <div className="row">
            <div className="text-container">
              <h4>FUN FOR THE WHOLE FAMILY</h4>
              <span className="left-aligned-text">No matter your age or experience level, we want you to have a great day on the water with our fishing guide service!</span>
            </div>
            <div className="image-container">
              <img src={image2} alt="Kids Bass" className="centered-image" />
            </div>
          </div>
          <div className="row">
            <div className="image-container">
              <img src={image3} alt="Striper" className="centered-image" />
            </div>
            <div className="text-container">
              <h4>WE LOVE WHAT WE DO</h4>
              <span className="left-aligned-text">We can't wait to share our love of fishing with you.</span>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default Home;
