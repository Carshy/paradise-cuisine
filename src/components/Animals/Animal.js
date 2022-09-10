/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import arrow1 from '../images/arrow1.PNG';
import './Animal.css';

function Animal({
  id, name, image, type,
}) {
  return (
    <div id={id} className="container-section">
      <div className="animalia-info-div">
        <div className="animalia-dropdown">
          <img className="animal-images" src={image} alt={name} />
          <Link to={`/details/${id}`}>
            <img src={arrow1} className="arrow-round" alt="arrow" />
          </Link>
        </div>
        <div className="animalia-description">
          <h2>{name}</h2>
          <h3>{type}</h3>
        </div>
      </div>
    </div>
  );
}

Animal.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
}.isRequired;

export default Animal;
