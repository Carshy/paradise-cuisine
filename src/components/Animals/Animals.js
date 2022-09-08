import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Animal from './Animal';
import './Animal.css';
import { fetchAnimalsDataFromApi } from '../../redux/animalia/animalia';

function Animals() {
// get Animals data from the store
  const animals = useSelector((state) => state.animals);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!animals.length) {
      dispatch(fetchAnimalsDataFromApi());
    }
  }, [animals.length, dispatch]);
  return (
    <div className="animal-wrapper">
      {
        animals.map((animal) => (
          <Animal
            key={animal.id}
            id={animal.id}
            image={animal.image_link}
            name={animal.name}
            type={animal.animal_type}
          />
        ))
      }
    </div>
  );
}

export default Animals;
