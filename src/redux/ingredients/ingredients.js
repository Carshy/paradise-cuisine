import * as actionType from '../actionsTypes/actionTypes';

const initialState = [];

const ingredientReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case `${actionType.FETCH_INGREDIENTS}/fulfilled`:
      return payload;
    case `${actionType.FETCH_INGREDIENTS}/rejected`:
      return [];
    default:
      return state;
  }
};

export default ingredientReducer;
