/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import * as actionType from '../actionsTypes/actionTypes';

// *********** Categories******************************

// Define formated categories names
const formatCategoryNames = (categories) => {
  const formatted = categories.meals.map((meal) => ({ name: meal.strCategory }));
  return formatted;
};

// Define the async thunk to fetch the formatted category names
export const fetchCategoryNames = createAsyncThunk(
  actionType.FETCH_CATEGORY_NAMES,
  async () => {
    const { data } = await axios.get('https://themealdb.com/api/json/v1/1/list.php?c=list');
    return formatCategoryNames(data);
  },
);

// Define function to fetch categories
const fetchCategories = async (categories) => {
  const fetchedCategories = [];
  for (const category of categories) {
    const fetchedCategory = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${category.name}`);
    fetchedCategories.push(fetchedCategory.data);
  }
  return fetchedCategories;
};

// Define the async thunk to load categories

export const loadCategories = createAsyncThunk(
  actionType.LOAD_CATEGORIES,
  async (categories) => {
    const data = await fetchCategories(categories);
    return data;
  },
);

// ********set the states loaded to true*********
export const updateCategoriesLoaded = () => ({
  type: actionType.UPDATE_CATEGORIES_LOADED,
});

export const updateIngredientsLoaded = () => ({
  type: actionType.UPDATE_INGREDIENTS_LOADED,
});

export const updateAreasLoaded = () => ({
  type: actionType.UPDATE_AREAS_LOADED,
});

export const updateMealListLoaded = (payload) => ({
  type: actionType.UPDATE_MEAL_LIST_LOADED,
  payload,
});

// *********** Ingredients ******************************

const formatIngredients = (ingredients) => {
  const formattedIngredients = ingredients.map((ingredient) => ({
    id: ingredient.idIngredient,
    name: ingredient.strIngredient,
    description: ingredient.strDescription,
  }));
  return formattedIngredients;
};

export const fetchIngredients = createAsyncThunk(
  actionType.FETCH_INGREDIENTS,
  async () => {
    const { data } = await axios.get('https://themealdb.com/api/json/v1/1/list.php?i=list');
    return formatIngredients(data.meals);
  },
);

// *********** Areas ******************************

// define format areas
const formatAreas = (areas) => {
  const formattedAreas = areas.map((area) => ({
    name: area.strArea,
  }));
  return formattedAreas;
};

// define an action to fetch areas
export const fetchAreas = createAsyncThunk(
  actionType.FETCH_AREAS,
  async () => {
    const { data } = await axios.get('https://themealdb.com/api/json/v1/1/list.php?a=list');
    return formatAreas(data.meals);
  },
);

// *********** Meals ******************************

// Define formated meal list
const formatMealList = (mealList) => {
  const formattedMealList = mealList.map((meal) => ({
    id: meal.idMeal,
    name: meal.strMeal,
    image: meal.strMealThumb,
  }));
  return formattedMealList;
};

// Define the async thunk to fetch the formatted meal list
export const fetchMealList = createAsyncThunk(
  actionType.FETCH_MEAL_LIST,
  async ({ name, base }) => {
    const { data } = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?${base}=${name}`);
    return formatMealList(data.meals);
  },
);

// Define the async thunk to fetch meal info
export const fetchMealInfo = createAsyncThunk(
  actionType.FETCH_MEAL_INFO,
  async (name) => {
    const response = await axios.get(`https://themealdb.com/api/json/v1/1/search.php?s=${name}`);
    const { meals } = response.data;
    return meals[0];
  },
);

export const clearMealList = () => ({
  type: actionType.CLEAR_MEAL_LIST,
});

export const clearMealInfo = () => ({
  type: actionType.CLEAR_MEAL_INFO,
});
