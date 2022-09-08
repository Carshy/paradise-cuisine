import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './AnimalDetails.css';

const AnimalDetails = () => {
  const { id } = useParams();
  const animals = useSelector((state) => state.animals);
  const [animal, setAnimal] = useState({});

  useEffect(() => {
    animals.forEach((animal) => {
      if (parseInt(animal.id, 10) === parseInt(id, 10)) {
        setAnimal(animal);
      }
    });
  }, [id, animals]);

  return (
    <div className="animal-details-section">
      <div className="animal-info">
        <h2 className="animal-title">{animal.name}</h2>
        <div className="animal-image">
          <img src={animal.image_link} alt={`${animal.name} details`} />
        </div>
        <h2 className="animal-characteristics">Characteristics</h2>
        <div className="span-details">
          <p className="spanned">
            Latin Name
            <span className="spanned-right">{animal.latin_name}</span>
          </p>
          <p className="spanned dark">
            Animal Type
            <span className="spanned-right">{animal.animal_type}</span>
          </p>
          <p className="spanned">
            Active Times
            <span className="spanned-right">{animal.active_time}</span>
          </p>
          <p className="spanned dark">
            Minimum Length
            <span className="spanned-right">{animal.length_min}</span>
          </p>
          <p className="spanned">
            Maximum Length
            <span className="spanned-right">{animal.length_max}</span>
          </p>
          <p className="spanned dark">
            Minimum Weight
            <span className="spanned-right">{animal.weight_min}</span>
          </p>
          <p className="spanned">
            Maximum Weight
            <span className="spanned-right">{animal.weight_max}</span>
          </p>
          <p className="spanned dark">
            Life span
            <span className="spanned-right">{animal.lifespan}</span>
          </p>
          <p className="spanned">
            Habitats
            <span className="spanned-right">{animal.habitat}</span>
          </p>
          <p className="spanned dark">
            Diet
            <span className="spanned-right">{animal.diet}</span>
          </p>
          <p className="spanned">
            Locations
            <span className="spanned-right">{animal.geo_range}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetails;
