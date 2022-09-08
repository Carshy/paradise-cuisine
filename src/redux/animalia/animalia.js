import fetchAnimals from './api';
import FETCH_ANIMALIA from './actionType';

// action creators
export const fetchAnimalsDataFromApi = () => async (dispatch) => {
  try {
    const data = await fetchAnimals();

    dispatch({ type: FETCH_ANIMALIA, payload: data });
  } catch (error) {
    throw new Error(error.message);
  }
};

// initial state
const animalArray = [];

// Reducer
const animalReducer = (state = animalArray, action) => {
  switch (action.type) {
    case FETCH_ANIMALIA:
      return action.payload;
    default:
      return state;
  }
};

export default animalReducer;
