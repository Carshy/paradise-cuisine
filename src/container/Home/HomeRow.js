/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import MealCard from './MealCard';

const HomeRow = ({ category }) => {
  return (
    <div className="homeRow">
      <h2>{category.name}</h2>
      <div className="homeRow__items">
        {category.meals?.map((meal) => <MealCard meal={meal} key={meal.idMeal} />)}
      </div>
    </div>
  );
};

HomeRow.propTypes = {
  name: PropTypes.string,
  idMeal: PropTypes.string,
}.isRequired;

export default HomeRow;
