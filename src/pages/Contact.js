import React from 'react';
import './Contact.css';
import HeaderLine from '../components/HeaderLine';
import image4 from './../images/IMG_005.jpg';

const Contact = () => {
    return (
        <section className="contact-section">
            <HeaderLine header="Contact Us" />
            <div className="contact-body">
                <div className="body1">
                    <div className="section">
                        <h3>We'd love to hear from you!</h3>
                        <p>We love our customers, so feel free to call or drop by during our business hours.</p>
                    </div>
                    <div className="section">
                        <h3>Wilson's Guide Service</h3>
                        <p><a href='https://maps.app.goo.gl/NN28a7vA43AcAPAk8'>2856 Rock Branch Road, Elberton, Georgia 30635, United States</a></p>
                    </div>
                    <p><a href="tel:7062833336">(706) 283-3336</a></p>
                    <p><a href="mailto:guide.wendell.wilson@gmail.com">guide.wendell.wilson@gmail.com</a></p>
                    <div className="section">
                        <h4>Hours</h4>
                        <p>Open today <span>05:00 am – 10:00 pm</span></p>
                    </div>
                    {/* <button className="contact-button">Drop us a line!</button> */}
                </div>
                <div className="body2">
                    <img src={image4} alt="Bass" className="contact-image" />
                </div>
            </div>
        </section>
    );
};

export default Contact;