/* eslint-disable react/jsx-boolean-value */
/* eslint-disable arrow-body-style */
// import React from 'react';
// import PropTypes from 'prop-types';
// import { ThreeDots } from 'react-loader-spinner';
// import { keyframes } from '@emotion/react';
// import Reveal from 'react-awesome-reveal';
// import MealCard from './MealCard';

// const flipAnimation = keyframes`
//   from {
//     opacity: 0;
//     transform: rotateX(-60deg);
//   }
//   to {
//     opacity: 1;
//     transform: rotateX(0);
//   }
// `;

// const HomeRow = ({ category }) => {
//   // console.log('category prop:', category);
//   const homeRowLoadingStyles = {
//     display: 'grid',
//     placeItems: 'center',
//   };
//   // console.log('category meals:', category.meals);
//   return (
//     <Reveal triggerOnce keyframes={flipAnimation} cascade fraction={0.5}>
//       <section className="homeRow">
//         <h2>{category.name}</h2>
//         <div className="homeRow__items" style={category.meals ? {} : homeRowLoadingStyles}>
//           {category.meals ? (
//             category.meals.map((meal) => (
//               <MealCard meal={meal} key={meal.idMeal} />
//             ))
//           ) : (
//             <ThreeDots
//               height="150"
//               width="150"
//               radius="9"
//               color="#c0841d"
//               ariaLabel="three-dots-loading"
//               wrapperStyle={{}}
//               visible={true}
//             />
//           )}
//         </div>
//       </section>
//     </Reveal>
//   );
// };

// export default HomeRow;

// import React from 'react';
// import PropTypes from 'prop-types';
// import { ThreeDots } from 'react-loader-spinner';
// import { keyframes } from '@emotion/react';
// import Reveal from 'react-awesome-reveal';
// import MealCard from './MealCard';
// import { Meal } from '../Models/Models';

// const flipAnimation = keyframes`
//   from {
//     opacity: 0;
//     transform: rotateX(-60deg);
//   }
//   to {
//     opacity: 1;
//     transform: rotateX(0);
//   }
// `;

// const HomeRow = ({ category }) => {
//   // console.log('Category:', category);
//   const homeRowLoadingStyles = {
//     display: 'grid',
//     placeItems: 'center',
//   };

//   return (
//     <Reveal triggerOnce keyframes={flipAnimation} cascade fraction={0.5}>
//       <section className="homeRow">
//         <h2>{category.name}</h2>
//         <div className="homeRow__items" style={category.meals ? {} : homeRowLoadingStyles}>
//           {category.meals && category.meals.length > 0 ? (
//             category.meals.map((meal) => (
//               <MealCard meal={meal} key={meal.idMeal} />
//             ))
//           ) : (
//             <ThreeDots
//               height="150"
//               width="150"
//               radius="9"
//               color="#c0841d"
//               ariaLabel="three-dots-loading"
//               wrapperStyle={{}}
//               visible={true}
//             />
//           )}
//         </div>
//       </section>
//     </Reveal>
//   );
// };

// HomeRow.propTypes = {
//   category: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     meals: PropTypes.arrayOf(PropTypes.shape(Meal)),
//   }).isRequired,
// };

// export default HomeRow;

import React from 'react';
import PropTypes from 'prop-types';
import { ThreeDots } from 'react-loader-spinner';
import { keyframes } from '@emotion/react';
import Reveal from 'react-awesome-reveal';
import MealCard from './MealCard';
import { Meal } from '../Models/Models';
import './Home.scss';

const flipAnimation = keyframes`
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

  const homeRowStyles = {
    overflowX: 'scroll',
    display: 'flex',
    background: 'rgba(255, 255, 255, 0.5)',
  };

  return (
    <Reveal triggerOnce keyframes={flipAnimation} cascade fraction={0.5}>
      <section className="app__homeRow">
        <h2>{category.name}</h2>
        <div className="homeRow__items" style={{ ...homeRowStyles, ...(category.meals ? {} : homeRowLoadingStyles) }}>
          {category.meals && category.meals.length > 0 ? (
            category.meals.map((meal) => (
              <MealCard meal={meal} key={meal.idMeal} />
            ))
          ) : (
            <ThreeDots
              height="150"
              width="150"
              radius="9"
              color="rgba(103, 160, 28, 1)"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              visible={true}
            />
          )}
        </div>
      </section>
    </Reveal>
  );
};

HomeRow.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    meals: PropTypes.arrayOf(PropTypes.shape(Meal)),
  }).isRequired,
};

export default HomeRow;
