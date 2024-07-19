import React, { useState } from 'react';
import './Contact.css';
import HeaderLine from '../components/HeaderLine';
import upArrow from './../images/up-arrow.svg';
import downArrow from './../images/down-arrow.svg';

const Contact = ({contactImage}) => {
    const [showHours, setShowHours] = useState(false);

    const toggleHours = () => {
        setShowHours(!showHours);
    };

    const getCurrentDay = () => {
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const date = new Date();
        return days[date.getDay()];
    };

    const currentDay = getCurrentDay();

    const hours = {
        Mon: "05:00 am – 10:00 pm",
        Tue: "05:00 am – 10:00 pm",
        Wed: "05:00 am – 10:00 pm",
        Thu: "05:00 am – 10:00 pm",
        Fri: "05:00 am – 10:00 pm",
        Sat: "05:00 am – 10:00 pm",
        Sun: "Closed",
    };

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
                        {!showHours ? (
                            currentDay === "Sun" ? (
                                <p onClick={toggleHours} className="hours-toggle">
                                    Closed today <img src={downArrow} alt="Down Arrow" className='arrow' />
                                </p>
                            ) : (
                                <p onClick={toggleHours} className="hours-toggle">
                                    <span>Open today <span className="today-hours">{hours[currentDay]}</span></span> <img src={downArrow} alt="Down Arrow" className='arrow' />
                                </p>
                            )
                        ) : (
                            <div className="hours-details">
                                {Object.keys(hours).map((day, index) => (
                                    <div key={day} className={`hours-row ${day === currentDay ? 'current-day' : ''}`}>
                                        <span>{day}</span>
                                        <span>
                                            {hours[day]}
                                            {index === 0 && (
                                                // <span onClick={toggleHours} className="arrow arrow-up">▲</span>
                                                <img onClick={toggleHours} src={upArrow} alt="Up Arrow" className='arrow' />
                                            )}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <button className="contact-button">Drop us a line!</button>
                </div>
                <div className="body2">
                    <img src={contactImage} alt="Bass" className="contact-image" />
                </div>
            </div>
        </section>
    );
};

export default Contact;
