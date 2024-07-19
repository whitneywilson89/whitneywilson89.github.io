import React, { useState } from 'react';
import './Contact.css';
import HeaderLine from '../components/HeaderLine';
import Popup from '../components/Popup';
import Spinner from '../components/Spinner';
import upArrow from './../images/up-arrow.svg';
import downArrow from './../images/down-arrow.svg';
import emailjs from '@emailjs/browser';

const Contact = ({ contactImage }) => {
    const [showHours, setShowHours] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [showPopupSuccess, setShowPopupSuccess] = useState(false);
    const [showPopupFail, setShowPopupFail] = useState(false);
    const [loading, setLoading] = useState(false);

    const toggleHours = () => {
        setShowHours(!showHours);
    };

    const toggleForm = () => {
        setShowForm(!showForm);
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

    const handleSubmit = (event) => {
        setLoading(true);
        event.preventDefault();

        const formData = new FormData(event.target);

        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        const emailTemplate = {
            Name: formObject.name,
            Email: formObject.email,
            Phone: formObject.phone,
            Message: formObject.message,
        }

        emailjs.send('default_service', 'template_t6u2qkp', emailTemplate, {
            publicKey: '9tYeEVMXrRJ-WuXk2',
        }).then(
            (res) => {
                setLoading(false);
                if (res.status === 200) {
                    setShowPopupSuccess(true);
                } else {
                    setShowPopupFail(true);
                }
            },
            (err) => {
                setLoading(false);
                setShowPopupFail(true);
            },
        )

        event.target.reset();
        setShowForm(false);
    };

    const handleClosePopup = () => {
        setShowPopupSuccess(false);
        setShowPopupFail(false);
    };

    return (
        <section className="contact-section">
            {showPopupSuccess && (
                <Popup
                    message="We got your message! We will be in touch!"
                    onClose={handleClosePopup}
                />
            )}
            {showPopupFail && (
                <Popup
                    message="Message failed to send. Please try again."
                    onClose={handleClosePopup}
                />
            )}
            {loading && (
                <Spinner/>
            )}
            <HeaderLine header="Contact Us" />
            <div className="contact-body">
                <div className={`body1 ${showForm ? 'form-active' : ''}`}>
                    {!showForm ? (
                        <>
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
                                                        <img onClick={toggleHours} src={upArrow} alt="Up Arrow" className='arrow' />
                                                    )}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <button className="contact-button" onClick={toggleForm}>Drop us a line!</button>
                        </>
                    ) : (
                        <div className="form-container">
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <h3>Drop us a line!</h3>
                                <label>Name*</label>
                                <input type="text" name="name" required />
                                <label>Email*</label>
                                <input type="email" name="email" required />
                                <label>Message*</label>
                                <textarea name="message" required></textarea>
                                <label>Phone Number*</label>
                                <input type="tel" name="phone" required />
                                <div className="form-actions">
                                    <button type="submit" >Send</button>
                                    <button type="button" onClick={toggleForm}>Cancel</button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
                <div className="body2">
                    <img src={contactImage} alt="Bass" className="contact-image" />
                </div>
            </div>
        </section>
    );
};

export default Contact;
