import React from 'react';
import './Lakes.css';
import lakeImage from './../images/IMG_009.jpg';
import HeaderLine from '../components/HeaderLine';

const Lakes = () => {
  return (
    <div className="lakes">
      <section className="lakes-section">
        <HeaderLine header="Where We Fish" />
        <div className="lakes-body">
          <div className="lakes-image-container">
            <div className="lakes-image-wrapper">
              <img src={lakeImage} alt="Lake" className="lakes-image" />
            </div>
          </div>
          <div className="lakes-text-container">
            <h4>LAKE RUSSELL</h4>
            <p>
              Lake Russell is located on the Georgia (GA) and South Carolina (SC) border, only two hours east of Atlanta and one hour southwest of Greenville, SC. This beautiful, pristine lake covers twenty-six thousand acres and boasts miles of undeveloped, natural wooded shoreline. Lake Rusell offers an outdoor experience that goes beyond just fishing. Visitors of this beautiful area enjoy the peaceful waters as well as the abundant wildlife.
            </p>
            <h4>LAKE CLARK HILL</h4>
            <p>
              Lake Clark Hill (AKA Strom Thurmond Lake) is located on the border of Georgia and South Carolina. just south of Lake Russell.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lakes;
