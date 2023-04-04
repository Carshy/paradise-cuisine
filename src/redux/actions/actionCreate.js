/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import * as actionType from '../actionsTypes/actionTypes';

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
