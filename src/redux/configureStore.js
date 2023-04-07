import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import categoriesReducer from './categories/categories';
import mealListReducer from './mealList/mealList';
import mealInfoReducer from './meal/mealInfo';
import ingredientReducer from './ingredients/ingredients';
import areasReducer from './areas/areas';
import appStateReducer from './appState/appState';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  mealList: mealListReducer,
  mealInfo: mealInfoReducer,
  ingredients: ingredientReducer,
  areas: areasReducer,
  state: appStateReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
