import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { images } from '../../constants';
import './Cooking.scss';

const Cooking = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cook = 'WEEKNIGHT COOKING';

  
  const navigateToDetail = () => {
    navigate('/recipeDetails/');
  }
  return (
    <div className="app__cooking">
      <div className="cooking-title-div">
        <h1 className="cooking-title">{cook}</h1>
      </div>
      <div className="app__cooking-container">
        <div className="app__cooking-right">
          <img
            className="cooking-img"
            src={images.weeknight}
            alt="weeknight"
          />
        </div>
        <div className="app__cooking-left">
          <p>Expert Advice</p>
          <h2>For the Glossiest, Sauciest Sheet-Pan Chicken, Grab a Jar of Jam</h2>
          <p>
            With the help of soy sauce, Dijon mustard, and vinegar, a jar of apricot
            jam transforms chicken legs into a gorgeous weeknight dinner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cooking;
