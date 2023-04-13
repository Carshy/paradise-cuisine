/* eslint-disable react/jsx-boolean-value */
/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { ThreeDots } from 'react-loader-spinner';
import { keyframes } from '@emotion/react';
import { Reveal } from 'react-awesome-reveal';
import MealCard from './MealCard';

const FlipAnimation = keyframes`
  from {
    opacity: 0;
    transform: rotateX(-60deg);
  }
  to {
    opacity: 1;
    transform: rotateX(0);
  }
`;

const HomeRow = ({ category }) => {
  const homeRowLoadingStyles = {
    display: 'grid',
    placeItems: 'center',
  };
  return (
    <Reveal triggerOnce keyframes={FlipAnimation} cascade fraction={0.5}>
      <div className="homeRow">
        <h2>{category.name}</h2>
        <div className="homeRow__items" style={category.meals ? {} : homeRowLoadingStyles}>
          {category.meals ? (
            category.meals.map((meal) => (
              <MealCard meal={meal} key={meal.idMeal} />
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
    </Reveal>
  );
};

HomeRow.propTypes = {
  name: PropTypes.string,
  idMeal: PropTypes.string,
  strMeal: PropTypes.string,
}.isRequired;

export default HomeRow;
