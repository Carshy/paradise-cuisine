/* eslint-disable react/jsx-boolean-value */
/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { ThreeDots } from 'react-loader-spinner';
import MealCard from './MealCard';

const HomeRow = ({ category }) => {
  const homeRowLoadingStyles = {
    display: 'grid',
    placeItems: 'center',
  };
  return (
    <div className="homeRow">
      <h2>{category.name}</h2>
      <div className="homeRow__items" style={category.meals ? {} : homeRowLoadingStyles}>
        {category.meals ? (
          category.meals.map((meal) => (
            <MealCard meal={meal.strMeal} key={meal.idMeal} />
          ))
        ) : (
          <ThreeDots
            height="150"
            width="150"
            radius="9"
            color="#c0841d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            visible={true}
          />
        )}
      </div>
    </div>
  );
};

HomeRow.propTypes = {
  name: PropTypes.string,
  idMeal: PropTypes.string,
}.isRequired;

export default HomeRow;
