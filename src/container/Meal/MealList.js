/* eslint-disable max-len */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate, useParams } from 'react-router-dom';
// import { IoArrowForwardOutline } from 'react-icons/io5';
// import { SiCoffeescript } from 'react-icons/si';
// import { TailSpin } from 'react-loader-spinner';
// import { fetchMealList, clearMealInfo } from '../../redux/actions/actionCreate';
// import { formatString } from '../Utils/Utils';

// const MealList = () => {
//   const [mediaWidth, setMediaWidth] = useState(0);
//   window.addEventListener('resize', () => {
//     setMediaWidth(window.innerWidth);
//   });

//   const navigate = useNavigate();
//   const params = useParams();
//   const dispatch = useDispatch();
//   const mealList = useSelector((state) => state.mealList);
//   console.log(mealList);
//   const { mealListLoaded } = useSelector((state) => state.appState);

//   useEffect(() => {
//     setMediaWidth(window.innerWidth);
//   }, []);

//   useEffect(() => {
//     if (params.ingredient) {
//       dispatch(fetchMealList({ name: params.ingredient, base: 'i' }));
//     } else if (params.area) {
//       dispatch(fetchMealList({ name: params.area, base: 'a' }));
//     }
//   }, [mealListLoaded, dispatch, params.ingredient, params.area]);
//   return (
//     <>
//       {mediaWidth <= 700 && (
//         <h2 className="mealList__back" onClick={() => { navigate(-1); }}>Back to Previous Page</h2>
//       )}

//       <ul className="mealList">
//         {mealList.length && !mealList[0].error ? (
//           mealList.map((meal) => (
//             <li className="mealList__item" key={meal.id}>
//               {meal.image && <img src={meal.image} alt={meal.name} />}
//               {meal.name && <h3>{meal.name}</h3>}
//               {meal.name && (
//               <IoArrowForwardOutline
//                 className="mealList__itemForward"
//                 onClick={() => {
//                   dispatch(clearMealInfo());
//                   navigate(`/meal/${formatString(meal.name)}`);
//                 }}
//               />
//               )}
//             </li>
//           ))
//         ) : mealList[0].error ? (
//           <>
//             <SiCoffeescript className="mealList__errorIcon" />
//             <h2 className="mealList__errorMessage">
//               We are very sorry but no meal matches the provided ingredient
//             </h2>
//           </>
//         ) : (
//           <TailSpin
//             height="150"
//             width="150"
//             color="#c0841d"
//             ariaLabel="tail-spin-loading"
//             radius="2"
//             wrapperStyle={{
//               marginInline: 'auto',
//               marginTop: '5em',
//               opacity: '0.5',
//             }}
//             wrapperClass=""
//             visible={true}
//           />
//         )}
//       </ul>
//     </>
//   );
// };

// export default MealList;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { SiCoffeescript } from 'react-icons/si';
import { TailSpin } from 'react-loader-spinner';
import { fetchMealList, clearMealInfo } from '../../redux/actions/actionCreate';
import { formatString } from '../Utils/Utils';

const MealList = () => {
  const [mediaWidth, setMediaWidth] = useState(0);
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const mealList = useSelector((state) => state.mealList);
  const { mealListLoaded } = useSelector((state) => state.appState);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setMediaWidth(window.innerWidth);
    });
    setMediaWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    if (params.ingredient) {
      dispatch(fetchMealList({ name: params.ingredient, base: 'i' }));
    } else if (params.area) {
      dispatch(fetchMealList({ name: params.area, base: 'a' }));
    }
  }, [mealListLoaded, dispatch, params.ingredient, params.area]);

  return (
    <>
      {mediaWidth <= 700 && (
        <h2 className="mealList__back" onClick={() => { navigate(-1); }}>Back to Previous Page</h2>
      )}

      <ul className="mealList">
        {mealList.length && !mealList[0].error ? (
          mealList.map((meal) => (
            <li className="mealList__item" key={meal.id}>
              {meal.image && <img src={meal.image} alt={meal.name} />}
              {meal.name && <h3>{meal.name}</h3>}
              {meal.name && (
                <IoArrowForwardOutline
                  className="mealList__itemForward"
                  onClick={() => {
                    dispatch(clearMealInfo());
                    navigate(`/meal/${formatString(meal.name)}`);
                  }}
                />
              )}
            </li>
          ))
        ) : mealList[0] && mealList[0].error ? (
          <>
            <SiCoffeescript className="mealList__errorIcon" />
            <h2 className="mealList__errorMessage">
              We are very sorry but no meal matches the provided ingredient
            </h2>
          </>
        ) : (
          <TailSpin
            height="150"
            width="150"
            color="#c0841d"
            ariaLabel="tail-spin-loading"
            radius="2"
            wrapperStyle={{
              marginInline: 'auto',
              marginTop: '5em',
              opacity: '0.5',
            }}
            wrapperClass=""
            visible={true}
          />
        )}
      </ul>
    </>
  );
};

export default MealList;
