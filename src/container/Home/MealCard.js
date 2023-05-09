import React from 'react';
import PropTypes from 'prop-types';
import { MdArrowForwardIos } from 'react-icons/md';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { formatString } from '../Utils/Utils';
import { clearMealInfo } from '../../redux/actions/actionCreate';

const MealCard = ({ meal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mealCardStyles = {
    background: `url(${meal.strMealThumb})`,
  };

  return (
    <div className="app__mealCard" style={mealCardStyles} key={v4()}>
      <div className="mealCard__content">
        <h3 className="mealCard__title">{meal.strMeal}</h3>
        <MdArrowForwardIos
          className="mealCard__arrow"
          onClick={() => {
            dispatch(clearMealInfo());
            navigate(`/meal/${formatString(meal.strMeal)}`);
          }}
        />
      </div>
    </div>
  );
};

MealCard.propTypes = {
  meal: PropTypes.shape({
    strMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
  }).isRequired,
};

export default MealCard;
