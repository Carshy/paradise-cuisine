/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
// import aligator1 from '../images/aligator1.jpg';
import './Animal.css';

function Animal({
  id, name, image, type,
}) {
  return (
    <div id={id} className="container-section">
      <div className="animalia-info-div">
        <div className="animalia-dropdown">
          <img className="animal-images" src={image} alt={name} />
          <a href="/">
            <i className="fa fa-arrow-circle-o-right" aria-hidden="true" />
          </a>
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
