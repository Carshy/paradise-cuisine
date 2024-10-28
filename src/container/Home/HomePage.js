/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { images } from '../../constants';
import './HomePage.scss';

const HomePage = () => {
  const intro1 = 'Welcome to Cuisine Delight';
  return (
    <div className="app__homepage">
      <div className="app__homepage-intro">
        <video className="background-video" autoPlay loop muted>
          <source src={images.cuisine} type="video/mp4" />
        </video>
        <div className="intro-overlay" />
        <div className="intro-content">
          <h1>{ intro1 }</h1>
          <p>Explore a world of flavors and recipes, crafted with passion for every palate.</p>
        </div>
        <div className="arrow-container">
          <FontAwesomeIcon icon={faChevronDown} className="scaling-arrow" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
