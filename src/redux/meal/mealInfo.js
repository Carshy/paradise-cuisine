import * as actionType from '../actionsTypes/actionTypes';

const initialState = [];

const mealInfoReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case `${actionType.FETCH_MEAL_INFO}/fulfilled`:
      return payload;
    case actionType.CLEAR_MEAL_INFO:
      return {};
    default:
      return state;
  }
};

export default mealInfoReducer;
