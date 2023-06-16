// import PropTypes from 'prop-types';
// import store from '../../redux/configureStore';

// // CATEGORIES

// export const Meal = PropTypes.shape({
//   strMeal: PropTypes.string.isRequired,
//   strMealThumb: PropTypes.string.isRequired,
//   idMeal: PropTypes.string.isRequired,
// });

// export const Category = PropTypes.shape({
//   name: PropTypes.string.isRequired,
//   meals: PropTypes.arrayOf(Meal).isRequired,
// });

// export const CategoriesT = PropTypes.arrayOf(Category);

// // INGREDIENTS

// const Ingredient = PropTypes.shape({
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
// });

// export const IngredientsT = PropTypes.arrayOf(Ingredient);

// // AREAS

// const Area = PropTypes.shape({
//   name: PropTypes.string.isRequired,
// });

// export const AreasT = PropTypes.arrayOf(Area);

// const MealListItem = PropTypes.shape({
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   error: PropTypes.string,
// });

// export const MealListT = PropTypes.arrayOf(MealListItem);

// export const MealT = PropTypes.shape({
//   dateModified: PropTypes.string,
//   idMeal: PropTypes.string,
//   strArea: PropTypes.string,
//   strCategory: PropTypes.string,
//   strCreativeCommonsConfirmed: PropTypes.string,
//   strDrinkAlternate: PropTypes.string,
//   strImageSource: PropTypes.string,
//   strIngredient1: PropTypes.string,
//   strIngredient2: PropTypes.string,
//   strIngredient3: PropTypes.string,
//   strIngredient4: PropTypes.string,
//   strIngredient5: PropTypes.string,
//   strIngredient6: PropTypes.string,
//   strIngredient7: PropTypes.string,
//   strIngredient8: PropTypes.string,
//   strIngredient9: PropTypes.string,
//   strIngredient10: PropTypes.string,
//   strIngredient11: PropTypes.string,
//   strIngredient12: PropTypes.string,
//   strIngredient13: PropTypes.string,
//   strIngredient14: PropTypes.string,
//   strIngredient15: PropTypes.string,
//   strIngredient16: PropTypes.string,
//   strIngredient17: PropTypes.string,
//   strIngredient18: PropTypes.string,
//   strIngredient19: PropTypes.string,
//   strIngredient20: PropTypes.string,
//   strInstructions: PropTypes.string,
//   strMeal: PropTypes.string,
//   strMealThumb: PropTypes.string,
//   strMeasure1: PropTypes.string,
//   strMeasure2: PropTypes.string,
//   strMeasure3: PropTypes.string,
//   strMeasure4: PropTypes.string,
//   strMeasure5: PropTypes.string,
//   strMeasure6: PropTypes.string,
//   strMeasure7: PropTypes.string,
//   strMeasure8: PropTypes.string,
//   strMeasure9: PropTypes.string,
//   strMeasure10: PropTypes.string,
//   strMeasure11: PropTypes.string,
//   strMeasure12: PropTypes.string,
//   strMeasure13: PropTypes.string,
//   strMeasure14: PropTypes.string,
//   strMeasure15: PropTypes.string,
//   strMeasure16: PropTypes.string,
//   strMeasure17: PropTypes.string,
//   strMeasure18: PropTypes.string,
//   strMeasure19: PropTypes.string,
//   strMeasure20: PropTypes.string,
//   strSource: PropTypes.string,
//   strTags: PropTypes.string,
//   strYoutube: PropTypes.string,
// });

// // APP STATE

// export const AppState = PropTypes.shape({
//   categoriesLoaded: PropTypes.bool.isRequired,
//   ingredientsLoaded: PropTypes.bool.isRequired,
//   areasLoaded: PropTypes.bool.isRequired,
//   mealListLoaded: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     base: PropTypes.string.isRequired,
//   }).isRequired,
// });

// // Global Redux States

// export const RootState = store.getState();

// // export const RootState = PropTypes.shape({
// //   getState: PropTypes.func.isRequired,
// // });

// export const ReduxAction = PropTypes.shape({
//   type: PropTypes.string.isRequired,
//   payload: PropTypes.string,
// });

import PropTypes from 'prop-types';

export const Meal = PropTypes.shape({
  idMeal: PropTypes.string.isRequired,
  strMeal: PropTypes.string,
  strCategory: PropTypes.string.isRequired,
  strArea: PropTypes.string.isRequired,
  strInstructions: PropTypes.string.isRequired,
  strMealThumb: PropTypes.string.isRequired,
  strTags: PropTypes.string.isRequired,
  strYoutube: PropTypes.string.isRequired,
  strIngredient1: PropTypes.string.isRequired,
  strIngredient2: PropTypes.string,
  strIngredient3: PropTypes.string,
  strIngredient4: PropTypes.string,
  strIngredient5: PropTypes.string,
  strIngredient6: PropTypes.string,
  strIngredient7: PropTypes.string,
  strIngredient8: PropTypes.string,
  strIngredient9: PropTypes.string,
  strIngredient10: PropTypes.string,
  strIngredient11: PropTypes.string,
  strIngredient12: PropTypes.string,
  strIngredient13: PropTypes.string,
  strIngredient14: PropTypes.string,
  strIngredient15: PropTypes.string,
  strIngredient16: PropTypes.string,
  strIngredient17: PropTypes.string,
  strIngredient18: PropTypes.string,
  strIngredient19: PropTypes.string,
  strIngredient20: PropTypes.string,
  strMeasure1: PropTypes.string.isRequired,
  strMeasure2: PropTypes.string,
  strMeasure3: PropTypes.string,
  strMeasure4: PropTypes.string,
  strMeasure5: PropTypes.string,
  strMeasure6: PropTypes.string,
  strMeasure7: PropTypes.string,
  strMeasure8: PropTypes.string,
  strMeasure9: PropTypes.string,
  strMeasure10: PropTypes.string,
  strMeasure11: PropTypes.string,
  strMeasure12: PropTypes.string,
  strMeasure13: PropTypes.string,
  strMeasure14: PropTypes.string,
  strMeasure15: PropTypes.string,
  strMeasure16: PropTypes.string,
  strMeasure17: PropTypes.string,
  strMeasure18: PropTypes.string,
  strMeasure19: PropTypes.string,
  strMeasure20: PropTypes.string,
});

export const ReduxAction = PropTypes.shape({
  type: PropTypes.string.isRequired,
  payload: PropTypes.string,
});
