import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const usePageTracking = () => {
    const location = useLocation();
    
    useEffect(() => {
        let pageName = "";
        if (location.pathname === "/") {
            pageName = "Home Page";
        } else if (location.pathname === "/about") {
            pageName = "About Page";
        } else if (location.pathname === "/lakes") {
            pageName = "Lakes Page";
        } else if (location.pathname === "/gallery") {
            pageName = "Gallery Page";
        } else if (location.pathname === "/rates") {
            pageName = "Rates Page";
        } else if (location.pathname === "/contact") {
            pageName = "Contact Page";
        } else {
            pageName = "Unknown";
        }

        ReactGA.send({ hitType: 'pageview', page: pageName });
    }, [location]);
};

export default usePageTracking;
