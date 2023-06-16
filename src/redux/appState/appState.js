import * as actionType from '../actionsTypes/actionTypes';

// initial State of the app
const initialState = {
  categoriesLoaded: false,
  ingredientsLoaded: false,
  areasLoaded: false,
  mealListLoaded: {
    name: '',
    base: '',
  },
};

const appStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.UPDATE_CATEGORIES_LOADED:
      return { ...state, categoriesLoaded: !state.categoriesLoaded };
    case actionType.UPDATE_INGREDIENTS_LOADED:
      return { ...state, ingredientsLoaded: !state.ingredientsLoaded };
    case actionType.UPDATE_AREAS_LOADED:
      return { ...state, areasLoaded: !state.areasLoaded };
    case actionType.UPDATE_MEAL_LIST_LOADED:
      return { ...state, mealListLoaded: action.payload };
    default:
      return state;
  }
};

export default appStateReducer;
