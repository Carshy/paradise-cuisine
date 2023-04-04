import React from 'react';
import PropTypes from 'prop-types';

const MealCard = ({ meal }) => {
  const mealCardStyles = {
    boxShadow: 'inset 0 15em rgba(0, 0, 0, .5)',
    height: '15em',
    background: `url(${meal.strMealThumb})`,
    backgroundSize: 'cover',
    aspectRatio: '1',
    color: '#fff',
  };

  return (
    <div className="mealCard" style={mealCardStyles}>
      <h3 className="mealCard__title">{meal.strMeal}</h3>
    </div>
  );
};

MealCard.propTypes = {
  strMeal: PropTypes.string,
  strMealThumb: PropTypes.string,
}.isRequired;

export default MealCard;
