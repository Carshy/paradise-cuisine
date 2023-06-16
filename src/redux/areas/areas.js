import * as actionType from '../actionsTypes/actionTypes';

const initialState = [];

const areasReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case `${actionType.FETCH_AREAS}/fulfilled`:
      return payload;
    default:
      return state;
  }
};

export default areasReducer;
