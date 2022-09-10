import React from 'react';
import Search from './Search';
import './Animal.css';

function Dropdown() {
  return (
    <div className="animalia-top-section">
      <p className="top-description">Welcome to the Animal Kingdom</p>
      <Search />
    </div>
  );
}

export default Dropdown;
