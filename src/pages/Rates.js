import React from 'react';
import './Rates.css';
import ratesImage from './../images/IMG_010.jpg'; // Update the image path
import image1 from './../images/IMG_011.jpg';
import image2 from './../images/IMG_012.jpg';
import image3 from './../images/IMG_013.jpg';
import ratesImage2 from './../images/IMG_014.jpg'; // Add the new image path
import HeaderLine from '../components/HeaderLine';

const Rates = () => {
    return (
        <div className="rates">
            <section className="rates-top">
                <div className="rates-container">
                    <div className="rates-image-container">
                        <img src={ratesImage} alt="Fishing Guide" className="rates-image" />
                    </div>
                    <div className="rates-text-container">
                        <h2 className="rates-heading">Professional Fishing Guide</h2>
                        <p className="rates-description">
                            Wilson's Guide Service takes great pride to ensure you have one of the best fishing experiences in your life. It is more than just catching fish! All needed supplies are included; you just need to bring a Georgia or South Carolina license.
                        </p>
                        <button className="learn-more-button">Learn More</button>
                    </div>
                </div>
            </section>
            <section className="features-section">
                <div className="features-container">
                    <div className="feature-card">
                        <div className="feature-image-container">
                            <img src={image1} alt="All Species" className="feature-image" />
                        </div>
                        <h3 className="feature-heading">All Species</h3>
                        <p className="feature-description">
                            Striper, Hybrid, Largemouth Bass, Spotted Bass, Crappie, White Perch, Yellow Perch, Bream, Catfish and Gar
                        </p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-image-container">
                            <img src={image2} alt="All Ages" className="feature-image" />
                        </div>
                        <h3 className="feature-heading">All Ages</h3>
                        <p className="feature-description">
                            Everyone is welcome on our boat. Whether you're 3 or 93, as long as you have a love for catching fish, we can help you!
                        </p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-image-container">
                            <img src={image3} alt="All Experience Levels" className="feature-image" />
                        </div>
                        <h3 className="feature-heading">All Experience Levels</h3>
                        <p className="feature-description">
                            From seasoned professionals to people who have never held a rod, everyone is welcome on our boat.
                        </p>
                    </div>
                </div>
            </section>
            <section className="additional-rates-section">
                <div className="additional-rates-container">
                    <div className="additional-rates-image-container">
                        <img src={ratesImage2} alt="Rates" className="additional-rates-image" />
                    </div>
                    <div className="additional-rates-text-container">
                        <h2 className="additional-rates-heading">Rates</h2>
                        <p className="additional-rates-description">$300 for 2 people</p>
                        <p className="additional-rates-description">$350 for 3 people</p>
                        <p className="additional-rates-description">$400 for 4 people</p>
                        {/* <button className="additional-rates-button">Find Out More</button> */}
                    </div>
                </div>
            </section>
            <section className="testimonials-section">
                <HeaderLine header="Testimonials" />
                <div className="testimonials-container">
                    <div className="testimonial-card">
                        <h3 className="testimonial-title">"AWESOME IN EVERY WAY"</h3>
                        <p className="testimonial-description">
                            Wendell was awesome in every way. He works very hard to help you catch fish. We put at least 45 in the boat from 6 different species. We can't say enough nice things about Wendell!
                        </p>
                    </div>
                    <div className="testimonial-card">
                        <h3 className="testimonial-title">"GREAT FISHING EXPERIENCE"</h3>
                        <p className="testimonial-description">
                            Went on 2 trips with Wendell once in July and again in October. It was a super time. Wendell's local knowledge is awesome and he showed us a great fishing experience!
                        </p>
                    </div>
                    <div className="testimonial-card">
                        <h3 className="testimonial-title">"OVER THE MOON"</h3>
                        <p className="testimonial-description">
                            Highly recommend!!!! Had the best time. Caught over 20 fish. He made sure they had a great time. My son won't stop talking about it. He caught a 10lb Gar and was over the moon.
                        </p>
                    </div>
                    <div className="testimonial-card">
                        <h3 className="testimonial-title">"EXCELLENT GUIDE"</h3>
                        <p className="testimonial-description">
                            Excellent guide who offers a great trip at a reasonable price for any skill level. Enjoyable, down to earth, person to be on the water with as well. He offers additional cleaning services and you can buy very well kept blue herring for your own trips.
                        </p>
                    </div>
                    <div className="testimonial-card">
                        <h3 className="testimonial-title">"GREAT GUY"</h3>
                        <p className="testimonial-description">
                            Wendell knows his area well and will bust his tail to make your trip enjoyable, fun and to help you catch fish! Great Guy ,too!!
                        </p>
                    </div>
                    <div className="testimonial-card">
                        <h3 className="testimonial-title">"PLENTY OF FISH"</h3>
                        <p className="testimonial-description">
                            We have fished with Wendell as our guide on Russell, Hartwell, and Clark Hill lakes for years and always enjoy our trips, catch plenty of fish, and are continually amazed at the knowledge and skills Wendell possesses.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Rates;
