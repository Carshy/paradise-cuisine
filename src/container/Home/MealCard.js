// import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { MdArrowForwardIos } from 'react-icons/md';
// import { v4 } from 'uuid';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { formatString } from '../Utils/Utils';
// import { clearMealInfo, fetchMealList } from '../../redux/actions/actionCreate';

// const MealCard = ({ meal }) => {
//   // console.log('meal prop:', meal);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const mealList = useSelector((state) => state.mealList);

//   useEffect(() => {
//     dispatch(fetchMealList());
//   }, [dispatch]);

//   const mealCardStyles = {
//     background: `url(${meal.strMealThumb})`,
//   };

//   return (
//     <>
//       {mealList.map((meal) => (
//         <div className="mealCard" style={mealCardStyles} key={v4()}>
//           <div className="mealCard__content">
//             <h3 className="mealCard__title">{meal.strMeal}</h3>
//             <MdArrowForwardIos
//               className="mealCard__arrow"
//               onClick={() => {
//                 dispatch(clearMealInfo());
//                 navigate(`/meal/${formatString(meal.strMeal)}`);
//               }}
//             />
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default MealCard;

import React, { useEffect } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { formatString } from '../Utils/Utils';
import { clearMealInfo, fetchMealList } from '../../redux/actions/actionCreate';

const MealCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mealList = useSelector((state) => state.mealList);

  useEffect(() => {
    dispatch(fetchMealList());
  }, [dispatch]);

  const mealCardStyles = (meal) => ({
    background: `url(${meal.strMealThumb})`,
  });
  console.log('MealList:', mealList);

  if (mealList.length === 0) {
    return <div>No meals available.</div>;
  }

  return (
    <>
      {mealList.map((meal) => (
        <div className="mealCard" style={mealCardStyles(meal)} key={v4()}>
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
      ))}
    </>
  );
};

export default MealCard;
