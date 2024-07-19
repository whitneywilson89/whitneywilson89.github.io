import React from 'react';
import './About.css';
import image1 from './../images/IMG_006.jpg';
import imageWendell from './../images/IMG_007.jpg';
import imageLuke from './../images/IMG_008.jpg';
import HeaderLine from '../components/HeaderLine';

const About = () => {
  return (
    <div className="about">
      <section className="about-services">
        <HeaderLine header="Fishing With Us" />
        <div className="about-services-body">
          <div className="about-services-image-container">
            <img src={image1} alt="About Us" className="about-image" />
          </div>
          <div className="about-services-text-container">
            <h4>OUR SERVICES INCLUDE:</h4>
            <ul>
              <li>Multi Species Fishing, Including Striper, Hybrid, Bass, Crappie & Perch</li>
              <li>Gift Certificates for All Occasions</li>
              <li>All Required Fishing Gear Provided</li>
              <li>Children and Family Welcome!</li>
            </ul>
            <h4>YOU NEED TO BRING:</h4>
            <ul>
              <li>Georgia or South Carolina Fishing License</li>
              <li>Food</li>
              <li>Drinks</li>
              <li>Sunscreen</li>
              <li>Raingear (if needed)</li>
              <li>Camera</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="about-profiles">
        <div className="about-profiles-header">
          <div className="line-left"></div>
          <span className="about-heading">About Our Guides</span>
          <div className="line-right"></div>
        </div>
        <div className="about-profiles-body">
          <div className="about-profiles-image-container">
            <img src={imageWendell} alt="Wendell Wilson" className="about-image" />
          </div>
          <div className="about-profiles-text-container">
            <h4>WENDELL WILSON</h4>
            <span>Wendell has been a full time guide since 1990. In his decades of guiding, Wendell has welcomed anglers of all ages and experience levels. He authors magazine articles and provides fishing reports for other websites. He and his family live one mile from Lake Russell. Wendell has been fishing Savannah River Basin Lakes Clark Hill (Thurmond) and Hartwell since 1973. Wendell is a multi-species guide. The most popular species are; Crappie, Stripers, Hybrids, Bass, White Perch, and Yellow Perch.</span>
          </div>
        </div>
        <div className="about-profiles-body">
          <div className="about-profiles-text-container">
            <h4>LUKE WILSON</h4>
            <span>Luke grew up in and around his father's fishing boat. With a lifetime of experience, he is an expert in all species on Lakes Russell and Clark Hill. He works with anglers of all ages and skill levels.</span>
          </div>
          <div className="about-profiles-image-container">
            <img src={imageLuke} alt="Luke Wilson" className="about-image" />
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;
