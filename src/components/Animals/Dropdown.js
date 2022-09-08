import React from 'react';
import photo1 from '../images/photo1.jpg';

function Dropdown() {
  return (
    <div>
      <div className="animalia-top-section">
        <img className="big-five" src={photo1} alt="bigfive" />
        <p className="top-description">Welcome to the Animal Kingdom</p>
      </div>
    </div>
  );
}

export default Dropdown;
