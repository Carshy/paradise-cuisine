/* eslint-disable arrow-body-style */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import recipesData from '../../data/recipeData';

// Mock fetch function to simulate an API
const fetchRecipeData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(recipesData);
    }, 3000);
  });
};

// Action to fetch recipes from the mock function
export const fetchRecipes = createAsyncThunk(
  'recipes/fetchRecipes',
  async () => {
    const data = await fetchRecipeData();
    return data;
  },
);

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    recipes: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true; // set loading to true while fetching
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.loading = false; // set fetching to false after fetching
        state.recipes = action.payload; // set the fetched recipes data
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // caption the error message
      });
  },
});

export default recipesSlice.reducer;
