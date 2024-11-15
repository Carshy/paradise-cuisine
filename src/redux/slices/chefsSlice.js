/* eslint-disable arrow-body-style */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import chefData from '../../data/chefData';

// Mock fetch function to simulate an API
const fetchChefData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(chefData);
    }, 3000);
  });
};

// Action to fetch chefs from the mock function
export const fetchChefs = createAsyncThunk(
  'chefs/fetchChefs',
  async () => {
    const data = await fetchChefData();
    return data;
  },
);

const chefsSlice = createSlice({
  name: 'chefs',
  initialState: {
    chefs: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChefs.pending, (state) => {
        state.loading = true; // set loading to true while fetching
      })
      .addCase(fetchChefs.fulfilled, (state, action) => {
        state.loading = false; // set fetching to false after fetching
        state.chefs = action.payload; // set the fetched recipes data
      })
      .addCase(fetchChefs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // caption the error message
      });
  },
});

export default chefsSlice.reducer;
