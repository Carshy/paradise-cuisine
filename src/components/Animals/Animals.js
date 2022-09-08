import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Dropdown from './Dropdown';
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

  const handleSearch = (e) => {
    e.preventDefault();
    let myValue = e.target.value;
    if (myValue.length > 0) {
      myValue = myValue.toLowerCase();
      const filteredAnmls = animals.filter((animal) => animal.name.toLowerCase().includes(myValue));
      dispatch(filteredAnmls);
    } else {
      dispatch(animals);
    }
  };

  return (
    <div>
      <Dropdown />

      <div className="search-field">
        <input type="text" placeholder="Search Animal..." onChange={handleSearch} />
      </div>

      <div className="animal-wrapper">
        {
          animals.map((animal) => (
            <Animal
              key={animal.id}
              id={animal.id}
              image={animal.image_link}
              name={animal.name}
              type={animal.animal_type}
              latinName={animal.latin_name}
              activeTime={animal.active_time}
              minLength={animal.length_min}
              maxLength={animal.length_max}
              minWeight={animal.weight_min}
              maxWeight={animal.weight_max}
              lifeSpan={animal.lifespan}
              habitats={animal.habitat}
              diet={animal.diet}
              locations={animal.geo_range}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Animals;
