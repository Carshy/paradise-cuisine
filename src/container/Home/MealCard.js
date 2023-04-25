import React from 'react';
import PropTypes from 'prop-types';
import { MdArrowForwardIos } from 'react-icons/md';
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
    <div className="mealCard" style={mealCardStyles}>
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
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
  }).isRequired,
};

export default MealCard;
